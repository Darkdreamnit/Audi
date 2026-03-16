/* ==========================================
   GLOBAL VARIABLES
========================================== */

let firebaseInitialized = false;
let communityPosts = [];


/* ==========================================
   PAGE LOAD INITIALIZATION
========================================== */

document.addEventListener("DOMContentLoaded", function () {

  console.log("Page loaded");

  /* Initialize Firebase safely */

  try {

    firebaseInitialized = initFirebase();

  } catch (e) {

    console.error("Firebase failed:", e);

    firebaseInitialized = false;

  }

  /* Initialize form submission */

  initSubmissionForm();

  /* Load posts */

  if (firebaseInitialized) {

    loadCommunityPosts();

  }

});


/* ==========================================
   MODAL CONTROLS
========================================== */

function openSubmissionModal() {

  const modal = document.getElementById("submission-modal");

  modal.classList.remove("hidden");

}

function closeSubmissionModal() {

  const modal = document.getElementById("submission-modal");

  const form = document.getElementById("submission-form");

  modal.classList.add("hidden");

  form.reset();

}


/* ==========================================
   FORM SETUP
========================================== */

function initSubmissionForm() {

  const form = document.getElementById("submission-form");

  if (!form) return;

  form.addEventListener("submit", submitCommunityFix);

}

/* ==========================================
   Limit Image Size to 3mb
========================================== */

if (file && file.size > 3 * 1024 * 1024) {
  alert("Image must be under 3MB");
  return;
}

/* ==========================================
   Prevent double submitting
========================================== */

let submitting = false;

async function submitCommunityFix(event) {
  event.preventDefault();

  if (submitting) return;
  submitting = true;

  const button = document.querySelector("#submission-form button[type='submit']");
  if (button) button.disabled = true;

  try {
    // your firebase submission code here
  } finally {
    submitting = false;
    if (button) button.disabled = false;
  }
}


/* ==========================================
   FORM SUBMISSION
========================================== */

async function submitCommunityFix(event) {

  event.preventDefault();

  const code = document.getElementById("submit-code").value;
  const model = document.getElementById("submit-model").value;
  const year = document.getElementById("submit-year").value;
  const solution = document.getElementById("submit-solution").value;
  const cost = document.getElementById("submit-cost").value;
  const author = document.getElementById("submit-name").value || "Anonymous";

  const photoInput = document.getElementById("submit-photo");
  const file = photoInput.files[0];

  try {

    let imageURL = null;

    /* Upload photo */

    if (file && firebaseInitialized) {

      const storageRef = firebaseStorage.ref();
      const imageRef = storageRef.child("community/" + Date.now() + "-" + file.name);

      await imageRef.put(file);

      imageURL = await imageRef.getDownloadURL();

    }

    const post = {

      code,
      model,
      year,
      solution,
      cost,
      author,
      image: imageURL,
      date: new Date().toISOString(),
      likes: 0

    };

    /* Save to Firebase */

    const postsRef = getCommunityPostsRef();

    const newPost = postsRef.push();

    await newPost.set(post);

    alert("✅ Fix shared successfully!");

    closeSubmissionModal();

  } catch (err) {

    console.error("Submission error:", err);

    alert("❌ Error submitting fix.");

  }

}


/* ==========================================
   LOAD COMMUNITY POSTS
========================================== */

function loadCommunityPosts() {

  const postsRef = getCommunityPostsRef();

  postsRef.on("value", function (snapshot) {

    const data = snapshot.val();

    if (!data) {

      communityPosts = [];

    } else {

      communityPosts = Object.keys(data).map(key => ({

        id: key,
        ...data[key]

      }));

    }

    displayCommunityPosts();

  });

}


/* ==========================================
   DISPLAY POSTS
========================================== */

function displayCommunityPosts() {

  const container = document.getElementById("community-grid");

  if (!container) return;

  if (communityPosts.length === 0) {

    container.innerHTML = "<p>No fixes shared yet.</p>";

    return;

  }

  container.innerHTML = communityPosts.map(post => `

    <div class="bg-white rounded-xl shadow border p-4">

      ${post.image ? `<img src="${post.image}" class="rounded mb-3 w-full">` : ""}

      <span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">${post.code}</span>

      <h3 class="font-bold mt-2">${post.model} ${post.year || ""}</h3>

      <p class="text-sm mt-2">${post.solution}</p>

      <div class="text-xs text-slate-500 mt-2">${post.author}</div>

    </div>

  `).join("");

}


/* ==========================================
   MODAL HELPER FUNCTIONS
========================================== */

function toggleCustomField(select, fieldId) {

  const field = document.getElementById(fieldId);

  if (select.value === "other") {

    field.classList.remove("hidden");

  } else {

    field.classList.add("hidden");

  }

}


function previewPhoto(input) {

  const file = input.files[0];
  const preview = document.getElementById("photo-preview");
  const container = document.getElementById("photo-preview-container");

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (e) {

    preview.src = e.target.result;

    preview.classList.remove("hidden");

    container.classList.add("hidden");

  };

  reader.readAsDataURL(file);

}


function handleDragOver(event) {

  event.preventDefault();

}


function handleDrop(event) {

  event.preventDefault();

  const input = document.getElementById("submit-photo");

  input.files = event.dataTransfer.files;

  previewPhoto(input);

}




/* ==========================================
   Features controller
========================================== */

/* ===============================
MAIN PAGE FEATURE CONTROLLER
=============================== */

function toggleMobileMenu() {

const menu = document.getElementById("mobile-menu")

menu.classList.toggle("hidden")

}


/* ===============================
SEARCH SYSTEM
=============================== */

function handleSearch(query) {

query = query.toLowerCase().trim()

const clearBtn = document.getElementById("clear-search")
const container = document.getElementById("search-results-container")
const resultsGrid = document.getElementById("search-results")

if(!query){

container.classList.add("hidden")
clearBtn.classList.add("hidden")
return

}

clearBtn.classList.remove("hidden")
container.classList.remove("hidden")

let results = []

if(window.dtcDatabase){

results = dtcDatabase.filter(code =>
code.code.toLowerCase().includes(query) ||
code.description.toLowerCase().includes(query) ||
code.symptoms.join(" ").toLowerCase().includes(query)
)

}

document.getElementById("result-count").innerText = `(${results.length})`

resultsGrid.innerHTML = results.map(code => `

<div class="code-card bg-white border rounded-xl p-4 cursor-pointer"
onclick="showCodeDetail('${code.code}')">

<h3 class="font-bold text-lg">${code.code}</h3>
<p class="text-sm text-slate-600">${code.description}</p>

</div>

`).join("")

}


function clearSearch(){

document.getElementById("main-search").value=""
document.getElementById("search-results-container").classList.add("hidden")
document.getElementById("clear-search").classList.add("hidden")

}


function quickSearch(term){

document.getElementById("main-search").value = term
handleSearch(term)

}



/* ===============================
NAVIGATION
=============================== */

function showHome(){

document.getElementById("home-content").classList.remove("hidden")
document.getElementById("search-results-container").classList.add("hidden")
document.getElementById("code-detail-view").classList.add("hidden")

window.scrollTo({top:0,behavior:"smooth"})

}


function backToSearch(){

document.getElementById("code-detail-view").classList.add("hidden")
document.getElementById("search-results-container").classList.remove("hidden")

}



/* ===============================
MODEL FILTER
=============================== */

function filterByModel(model){

const results = dtcDatabase.filter(code =>
code.models && code.models.includes(model)
)

const grid = document.getElementById("model-codes-list")

grid.innerHTML = results.map(code => `

<div class="code-card bg-white border rounded-xl p-4">
<h3 class="font-bold">${code.code}</h3>
<p class="text-sm">${code.description}</p>
</div>

`).join("")

document.getElementById("model-title").innerText = `${model} Common Codes`
document.getElementById("model-specific-codes").classList.remove("hidden")

}


function clearModelFilter(){

document.getElementById("model-specific-codes").classList.add("hidden")

}



/* ===============================
SYMPTOM CHECKER
=============================== */

let selectedSymptoms = []

function toggleSymptom(symptom){

if(selectedSymptoms.includes(symptom)){

selectedSymptoms = selectedSymptoms.filter(s => s !== symptom)

}else{

selectedSymptoms.push(symptom)

}

renderSelectedSymptoms()

}


function renderSelectedSymptoms(){

const container = document.getElementById("symptom-tags")

container.innerHTML = selectedSymptoms.map(symptom =>

`<span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">${symptom}</span>`

).join("")

}


function findCodesBySymptoms(){

if(selectedSymptoms.length === 0){

alert("Select at least one symptom")

return

}

const results = dtcDatabase.filter(code =>
selectedSymptoms.some(symptom =>
code.symptoms.includes(symptom)
)
)

document.getElementById("search-results-container").classList.remove("hidden")

document.getElementById("search-results").innerHTML = results.map(code => `

<div class="code-card bg-white border rounded-xl p-4">
<h3 class="font-bold">${code.code}</h3>
<p class="text-sm">${code.description}</p>
</div>

`).join("")

}



/* ===============================
COMMUNITY FILTER
=============================== */

function filterCommunity(code){

const buttons = document.querySelectorAll(".community-filter")

buttons.forEach(btn => btn.classList.remove("bg-slate-900","text-white"))

document.querySelector(`[data-filter="${code}"]`).classList.add("bg-slate-900","text-white")

let filtered = communityPosts

if(code !== "all"){

filtered = communityPosts.filter(post => post.code === code)

}

displayCommunityPosts(filtered)

}



/* ===============================
CUSTOM FIELD TOGGLE
=============================== */

function toggleCustomField(select,fieldId){

const field = document.getElementById(fieldId)

if(select.value === "other"){

field.classList.remove("hidden")

}else{

field.classList.add("hidden")

}

}



/* ===============================
IMAGE UPLOAD PREVIEW
=============================== */

function previewPhoto(input){

const file = input.files[0]

if(!file) return

const reader = new FileReader()

reader.onload = function(e){

const preview = document.getElementById("photo-preview")
const container = document.getElementById("photo-preview-container")

preview.src = e.target.result
preview.classList.remove("hidden")
container.classList.add("hidden")

}

reader.readAsDataURL(file)

}


function handleDragOver(e){

e.preventDefault()

}


function handleDrop(e){

e.preventDefault()

const input = document.getElementById("submit-photo")

input.files = e.dataTransfer.files

previewPhoto(input)

}