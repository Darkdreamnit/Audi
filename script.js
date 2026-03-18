/* ==========================================
GLOBAL VARIABLES
========================================== */

let firebaseInitialized = false
let communityPosts = []
let submitting = false
let selectedDTC = null
let currentModelFilter = null


/* ==========================================
PAGE LOAD INITIALIZATION
========================================== */
document.addEventListener("DOMContentLoaded", function () {

  console.log("Page loaded");

  try {
    firebaseInitialized = initFirebase();
  } catch (e) {
    console.error("Firebase failed:", e);
    firebaseInitialized = false;
  }

  console.log("DTC Database:", dtcDatabase);
console.log("DTC Count:", dtcDatabase?.length);

  initSubmissionForm();

  /* ✅ FIXED: Properly load dropdown */
  loadCommonDTCs();

  if (firebaseInitialized) {
    loadCommunityPosts();
  }

});


/* ==========================================
COMMON DTC DROPDOWN (FIXED)
========================================== */

function loadCommonDTCs(){

const dropdown = document.getElementById("dtc-dropdown");

if(!dropdown){
console.error("❌ Dropdown element not found");
return;
}

if(typeof audiCommonDTCs === "undefined"){
console.error("❌ audiCommonDTCs is not loaded. Check data.js");
return;
}

if(!Array.isArray(audiCommonDTCs) || audiCommonDTCs.length === 0){
console.error("❌ audiCommonDTCs is empty");
return;
}

dropdown.innerHTML = `
<option value="">🔧 Select a Common Code</option>
` + audiCommonDTCs.map(dtc => `
<option value="${dtc.code}">
${dtc.code} - ${dtc.desc}
</option>
`).join("");

console.log("✅ DTC dropdown loaded:", audiCommonDTCs.length);

}


/* ==========================================
DTC DROPDOWN HANDLER
========================================== */

function handleDTCSelection(code){

if(!code){
clearDTCSelection()
return
}

const dtc = audiCommonDTCs.find(d => d.code === code);
if(!dtc) return;

selectedDTC = dtc;

document.getElementById("dtc-preview")?.classList.remove("hidden");
document.getElementById("dtc-code").textContent = dtc.code;
document.getElementById("dtc-severity").textContent = dtc.severity;
document.getElementById("dtc-desc").textContent = dtc.desc;

}


function runSelectedDTCSearch(){

if(!selectedDTC) return;

quickSearch(selectedDTC.code);

}


function clearDTCSelection(){

selectedDTC = null;

document.getElementById("dtc-preview")?.classList.add("hidden");

const dropdown = document.getElementById("dtc-dropdown");
if(dropdown) dropdown.value = "";

}


/* ==========================================
PREVIEW IMAGE
========================================== */

document.getElementById("submit-photo")?.addEventListener("change", function(event) {

  const file = event.target.files[0];

  const preview = document.getElementById("photo-preview");
  const container = document.getElementById("photo-preview-container");

  if (!file) {
    preview.classList.add("hidden");
    container.classList.remove("hidden");
    return;
  }

  // Validate image type
  if (!file.type.startsWith("image/")) {
    alert("Please upload a valid image file");
    event.target.value = "";
    return;
  }

  const reader = new FileReader();

  reader.onload = function(e) {
    preview.src = e.target.result;
    preview.classList.remove("hidden");
    container.classList.add("hidden");
  };

  reader.readAsDataURL(file);
});
/* ==========================================
REMOVE/RESET BUTTON
========================================== */

function removeImage(){
  const input = document.getElementById("submit-photo");
  const preview = document.getElementById("photo-preview");
  const container = document.getElementById("photo-preview-container");

  input.value = "";
  preview.src = "";
  preview.classList.add("hidden");
  container.classList.remove("hidden");
}
/* ==========================================
MODEL DROPDOWN
========================================== */

function handleModelDropdown(value){

if(!value){
clearModelFilter()
return
}

filterByModel(value)

}


function clearModelFilter() {

currentModelFilter = null;

document.getElementById('model-specific-codes')?.classList.add('hidden');

const dropdown = document.getElementById("model-dropdown");
if(dropdown) dropdown.value = "";

}


/* ==========================================
NAVIGATION
========================================== */

function showHome(){
document.getElementById("search-results-container")?.classList.add("hidden")
window.scrollTo({top:0,behavior:"smooth"})
}

function toggleMobileMenu(){
const menu = document.getElementById("mobile-menu")
if(!menu) return
menu.classList.toggle("hidden")
}


/* ==========================================
MODAL CONTROLS
========================================== */

function openSubmissionModal(){
document.getElementById("submission-modal").classList.remove("hidden")
}

function closeSubmissionModal(){

const modal = document.getElementById("submission-modal")
const form = document.getElementById("submission-form")

modal.classList.add("hidden")

if(form) form.reset()

const preview = document.getElementById("photo-preview")
const container = document.getElementById("photo-preview-container")

if(preview) preview.classList.add("hidden")
if(container) container.classList.remove("hidden")

}


/* ==========================================
FORM SETUP
========================================== */

function initSubmissionForm(){

const form = document.getElementById("submission-form")
if(!form) return

form.addEventListener("submit", submitCommunityFix)

}


/* ==========================================
FORM SUBMISSION
========================================== */

async function submitCommunityFix(event){

event.preventDefault()

if(submitting) return
submitting = true

const button = document.querySelector("#submission-form button[type='submit']")
if(button) button.disabled = true

try{

const code = document.getElementById("submit-code").value.trim()
const model = document.getElementById("submit-model").value.trim()
const year = document.getElementById("submit-year").value.trim()
const solution = document.getElementById("submit-solution").value.trim()
const cost = document.getElementById("submit-cost").value.trim()
const author = document.getElementById("submit-name").value.trim() || "Anonymous"

const photoInput = document.getElementById("submit-photo")
const file = photoInput.files[0]

if(file && file.size > 3 * 1024 * 1024){
alert("Image must be under 3MB")
submitting = false
if(button) button.disabled = false
return
}

let imageURL = null

if(file && firebaseInitialized){

const storageRef = firebaseStorage.ref()
const imageRef = storageRef.child("community/" + Date.now() + "-" + file.name)

await imageRef.put(file)
imageURL = await imageRef.getDownloadURL()

}

const duplicate = communityPosts.find(p =>
p.code === code &&
p.model === model &&
p.solution === solution
)

if(duplicate){
alert("⚠️ This fix has already been shared.")
submitting = false
if(button) button.disabled = false
return
}

const post = {
code, model, year, solution, cost, author,
image:imageURL,
date:new Date().toISOString(),
likes:0
}

const postsRef = getCommunityPostsRef()
const newPost = postsRef.push()

await newPost.set(post)

alert("✅ Fix shared successfully!")
closeSubmissionModal()

}catch(err){
console.error("Submission error:",err)
alert("❌ Error submitting fix.")
}

submitting = false
if(button) button.disabled = false

}


/* ==========================================
LOAD COMMUNITY POSTS
========================================== */

function loadCommunityPosts(){

const postsRef = getCommunityPostsRef()

postsRef.on("value",function(snapshot){

const data = snapshot.val()

communityPosts = data ? Object.keys(data).map(key=>({
id:key,
...data[key]
})) : []

communityPosts.sort((a,b)=> new Date(b.date)-new Date(a.date))

displayCommunityPosts()

})

}


/* ==========================================
DISPLAY POSTS
========================================== */

function displayCommunityPosts(posts = communityPosts){

const container = document.getElementById("community-grid")
if(!container) return

if(posts.length===0){
container.innerHTML="<p>No fixes shared yet.</p>"
return
}

container.innerHTML = posts.map(post=>`

<div class="bg-white rounded-xl shadow border p-4">

${post.image ? `<img src="${post.image}" class="rounded mb-3 w-full">`:""}

<span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">${post.code}</span>

<h3 class="font-bold mt-2">${post.model} ${post.year||""}</h3>

<p class="text-sm mt-2">${post.solution}</p>

<div class="text-xs text-slate-500 mt-2">${post.author}</div>

<div class="flex items-center mt-3">
<button onclick="likePost('${post.id}')" class="text-sm text-blue-600">
👍 ${post.likes || 0}
</button>
</div>

</div>

`).join("")

}


/* ==========================================
LIKE POSTS
========================================== */

function likePost(id){

const post = communityPosts.find(p => p.id === id)
if(!post) return

/* 🔒 Unique key per post */
const likeKey = `liked_${id}`

/* 🚫 Prevent duplicate likes */
if(localStorage.getItem(likeKey)){
alert("⚠️ You already liked this fix.")
return
}

/* Save like locally */
localStorage.setItem(likeKey, "true")

const postsRef = getCommunityPostsRef()

postsRef.child(id).update({
likes: (post.likes || 0) + 1
})

}


/* ==========================================
Real Search Function
========================================== */

function handlemainSearch(query) {

  const resultsSection = document.getElementById("results-section");
  const resultsContainer = document.getElementById("main-search-results");

  if (!resultsSection || !resultsContainer) return;



  query = query.toLowerCase().trim();

  if (!query) {
    resultsSection.classList.add("hidden");
    resultsContainer.innerHTML = "";
    return;
  }

 // ✅ SHOW LOADING SPINNER HERE
  resultsContainer.innerHTML = `
  <div class="col-span-full text-center py-10">
    <div class="animate-spin w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full mx-auto"></div>
    <p class="mt-3 text-slate-500">Searching...</p>
  </div>
  `;


  

  // 🔥 SEARCH dtcDatabase
  const results = dtcDatabase.filter(dtc =>
    dtc.code.toLowerCase().includes(query) ||
    dtc.description.toLowerCase().includes(query)
  );

  // Show section
  resultsSection.classList.remove("hidden");

  // No results
  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div class="col-span-full text-center text-slate-500">
        No results found
      </div>
    `;
    return;
  }

  // Render results
  resultsContainer.innerHTML = results.slice(0, 50).map(dtc => `
    <div class="card">
      <div class="code-badge">${dtc.code}</div>
      <p class="mt-2 text-sm">${dtc.description}</p>
    </div>
  `).join("");

}



/* ==========================================
Description fix incase any description is missing
========================================== */

const results = dtcDatabase.filter(dtc =>
  dtc.code?.toLowerCase().includes(query) ||
  dtc.description?.toLowerCase().includes(query)
);


/* ==========================================
SEARCH SYSTEM
========================================== */

function handleCommunitySearch(query){

query = query.toLowerCase().trim()
if(!query) return

const results = communityPosts.filter(post=>
post.code.toLowerCase().includes(query) ||
post.model.toLowerCase().includes(query) ||
post.solution.toLowerCase().includes(query)
)

displayCommunityPosts(results)

}

function clearSearch(){
displayCommunityPosts()
}


/* ==========================================
SEARCHABLE DTC DROPDOWN (UI UPGRADE ONLY)
========================================== */

function filterDTCs(query){

const resultsBox = document.getElementById("dtc-results");
if(!resultsBox) return;

if(!query){
resultsBox.classList.add("hidden");
return;
}

query = query.toLowerCase();

const matches = audiCommonDTCs.filter(dtc =>
dtc.code.toLowerCase().includes(query) ||
dtc.desc.toLowerCase().includes(query)
).slice(0,20);

if(matches.length === 0){
resultsBox.innerHTML = `<div class="p-3 text-sm text-slate-500">No results found</div>`;
resultsBox.classList.remove("hidden");
return;
}

resultsBox.innerHTML = matches.map(dtc => `
<div onclick="selectDTC('${dtc.code}')"
class="p-3 hover:bg-slate-100 cursor-pointer border-b">

<div class="font-semibold text-sm">${dtc.code}</div>
<div class="text-xs text-slate-500">${dtc.desc}</div>

</div>
`).join("");

resultsBox.classList.remove("hidden");

}


function selectDTC(code){

const dtc = audiCommonDTCs.find(d => d.code === code);
if(!dtc) return;

selectedDTC = dtc;

/* 🔥 THIS USES YOUR EXISTING UI — NOT CHANGED */
handleDTCSelection(code);

document.getElementById("dtc-search").value = code;
document.getElementById("dtc-results").classList.add("hidden");

}


/* Close dropdown when clicking outside */
document.addEventListener("click", function(e){

const box = document.getElementById("dtc-results");
const input = document.getElementById("dtc-search");

if(!box || !input) return;

if(!box.contains(e.target) && e.target !== input){
box.classList.add("hidden");
}

});
/* ==========================================
CUSTOM FIELD
========================================== */

function toggleCustomField(select,fieldId){

const field=document.getElementById(fieldId)

if(select.value==="other"){
field.classList.remove("hidden")
}else{
field.classList.add("hidden")
}

}
