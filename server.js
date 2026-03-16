// server.js
const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// ------------------------
// Cloudinary Configuration
// ------------------------

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

// ------------------------
// Middleware
// ------------------------
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// ------------------------
// Multer configuration for memory storage
// ------------------------
const upload = multer({ 
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) cb(null, true);
        else cb(new Error('Only image files are allowed'), false);
    }
});

// ------------------------
// JSON storage for testing (ephemeral on Render)
// ------------------------
const DATA_FILE = path.join(__dirname, 'submissions.json');

async function initializeDataFile() {
    try {
        await fs.access(DATA_FILE);
    } catch {
        await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2));
    }
}

// ------------------------
// Root API route (for testing)
// ------------------------
app.get('/api', (req, res) => {
    res.json({ message: 'API is working! Use /api/submissions for submissions.' });
});

// ------------------------
// Get all submissions
// ------------------------
app.get('/api/submissions', async (req, res) => {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        let submissions = JSON.parse(data);
        
        // Optional filter by code
        if (req.query.code && req.query.code !== 'all') {
            submissions = submissions.filter(s => s.code === req.query.code);
        }

        submissions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        res.json(submissions);
    } catch (error) {
        console.error('Error reading submissions:', error);
        res.status(500).json({ error: 'Failed to read submissions' });
    }
});

// ------------------------
// Create a new submission
// ------------------------
app.post('/api/submissions', upload.single('photo'), async (req, res) => {
    try {
        const { code, model, year, solution, cost, name } = req.body;
        
        if (!code || !model || !solution) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        let imageUrl = null;

        // Upload to Cloudinary if file is provided
        if (req.file) {
            const result = await new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    { folder: 'audi-dtc-fixes', public_id: `fix_${Date.now()}`, resource_type: 'image' },
                    (error, result) => error ? reject(error) : resolve(result)
                );
                stream.end(req.file.buffer);
            });
            imageUrl = result.secure_url;
        }

        const submission = {
            id: Date.now(),
            code,
            model,
            year: year || '',
            solution,
            cost: cost || '',
            name: name || 'Anonymous Audi Enthusiast',
            image: imageUrl || 'https://static.photos/technology/640x360/1', // placeholder
            date: new Date().toLocaleDateString(),
            createdAt: new Date().toISOString(),
            likes: 0
        };

        // Read existing submissions
        let submissions = [];

try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    submissions = JSON.parse(data);
} catch (err) {
    console.log("No submissions file yet, creating one...");
    submissions = [];
}

        // Add new submission
        submissions.unshift(submission);

        // Save back to JSON file
        await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2));

        console.log('New submission received:', submission);

        res.status(201).json(submission);
    } catch (error) {
        console.error('Error creating submission:', error);
        res.status(500).json({ error: 'Failed to create submission' });
    }
});

// ------------------------
// Like a submission
// ------------------------
app.post('/api/submissions/:id/like', async (req, res) => {
    try {
        let submissions = [];

try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    submissions = JSON.parse(data);
} catch (err) {
    console.log("No submissions file yet, creating one...");
    submissions = [];
}

        const submission = submissions.find(s => s.id === parseInt(req.params.id));
        if (!submission) return res.status(404).json({ error: 'Submission not found' });

        submission.likes = (submission.likes || 0) + 1;
        await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2));

        res.json({ likes: submission.likes });
    } catch (error) {
        console.error('Error liking submission:', error);
        res.status(500).json({ error: 'Failed to like submission' });
    }
});

// ------------------------
// Error handling
// ------------------------
app.use((error, req, res, next) => {
    if (error instanceof multer.MulterError && error.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: 'File too large (max 5MB)' });
    }
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
});

// ------------------------
// Start server
// ------------------------
initializeDataFile().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
        console.log('Environment:', process.env.NODE_ENV || 'development');
    });
});