const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Configure multer for memory storage (we'll upload to Cloudinary)
const upload = multer({ 
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed'), false);
        }
    }
});

const DATA_FILE = path.join(__dirname, 'submissions.json');

// Initialize data file if it doesn't exist
async function initializeDataFile() {
    try {
        await fs.access(DATA_FILE);
    } catch {
        await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2));
    }
}

// Get all submissions
app.get('/api/submissions', async (req, res) => {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        let submissions = JSON.parse(data);
        
        // Filter by code if provided
        if (req.query.code && req.query.code !== 'all') {
            submissions = submissions.filter(s => s.code === req.query.code);
        }
        
        // Sort by date (newest first)
        submissions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        
        res.json(submissions);
    } catch (error) {
        console.error('Error reading submissions:', error);
        res.status(500).json({ error: 'Failed to read submissions' });
    }
});

// Create new submission
app.post('/api/submissions', upload.single('photo'), async (req, res) => {
    try {
        const { code, model, year, solution, cost, name } = req.body;
        
        if (!code || !model || !solution) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        let imageUrl = null;

        // Upload image to Cloudinary if provided
        if (req.file) {
            const uploadPromise = new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    { 
                        folder: 'audi-dtc-fixes',
                        public_id: `fix_${Date.now()}`,
                        resource_type: 'image'
                    },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                );
                stream.end(req.file.buffer);
            });

            const result = await uploadPromise;
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
            image: imageUrl || 'https://static.photos/technology/640x360/1', // Placeholder if no image
            date: new Date().toLocaleDateString(),
            createdAt: new Date().toISOString(),
            likes: 0
        };

        // Read existing data
        const data = await fs.readFile(DATA_FILE, 'utf8');
        const submissions = JSON.parse(data);
        
        // Add new submission
        submissions.unshift(submission);
        
        // Write back to file
        await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2));

        res.status(201).json(submission);
    } catch (error) {
        console.error('Error creating submission:', error);
        res.status(500).json({ error: 'Failed to create submission' });
    }
});

// Like a submission
app.post('/api/submissions/:id/like', async (req, res) => {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        const submissions = JSON.parse(data);
        
        const submission = submissions.find(s => s.id === parseInt(req.params.id));
        if (!submission) {
            return res.status(404).json({ error: 'Submission not found' });
        }

        submission.likes = (submission.likes || 0) + 1;
        
        await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2));
        
        res.json({ likes: submission.likes });
    } catch (error) {
        console.error('Error liking submission:', error);
        res.status(500).json({ error: 'Failed to like submission' });
    }
});

// Error handling middleware
app.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ error: 'File too large (max 5MB)' });
        }
    }
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
});

// Start server
initializeDataFile().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
        console.log('Environment:', process.env.NODE_ENV || 'development');
    });
});
