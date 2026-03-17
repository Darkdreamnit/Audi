/* ==========================================
GLOBAL VARIABLES
========================================== */

let firebaseInitialized = false
let communityPosts = []
let submitting = false
let selectedDTC = null
let currentModelFilter = null

/* ✅ NEW MODEL DATA */
const audiModelData = {
"A4": [
{
code: "P0299",
desc: "Turbo Underboost",
fix: "Check boost leaks or replace turbo",
cost: "$300 - $1500"
},
{
code: "P0171",
desc: "System Too Lean",
fix: "Clean MAF sensor or fix vacuum leak",
cost: "$100 - $400"
}
],
"A6": [
{
code: "P2008",
desc: "Intake Manifold Runner Control",
fix: "Replace intake manifold motor",
cost: "$400 - $1200"
}
],
"Q5": [
{
code: "P0456",
desc: "EVAP Small Leak",
fix: "Replace gas cap or purge valve",
cost: "$50 - $300"
}
]
}

/* ==========================================
PAGE LOAD INITIALIZATION
========================================== */
document.addEventListener("DOMContentLoaded", function () {

  try {
    firebaseInitialized = initFirebase();
  } catch (e) {
    firebaseInitialized = false;
  }

  initSubmissionForm();
  loadCommonDTCs();

  if (firebaseInitialized) {
    loadCommunityPosts();
  }

});

/* ==========================================
MODEL DROPDOWN → POPUP SYSTEM
========================================== */

function handleModelDropdown(value){

if(!value){
clearModelFilter()
return
}

/* 🔥 SHOW POPUP INSTEAD OF JUST FILTERING */
showModelPopup(value)

}

function showModelPopup(model){

const data = audiModelData[model]

if(!data){
alert("No data available for this model yet.")
return
}

const modal = document.getElementById("model-popup")
const container = document.getElementById("model-popup-content")

container.innerHTML = `
<h2 class="text-2xl font-bold mb-4 text-white">${model} Common Issues</h2>

<div class="grid gap-4">

${data.map(item => `
<div class="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">

<div class="flex justify-between mb-2">
<span class="bg-red-600 text-white px-2 py-1 text-xs rounded">${item.code}</span>
<span class="text-xs text-slate-300">${item.cost}</span>
</div>

<h3 class="text-white font-semibold">${item.desc}</h3>

<p class="text-sm text-slate-300 mt-2">
🔧 ${item.fix}
</p>

</div>
`).join("")}

</div>
`

modal.classList.remove("hidden")

}

function closeModelPopup(){
document.getElementById("model-popup").classList.add("hidden")
}

function clearModelFilter() {
currentModelFilter = null;
const dropdown = document.getElementById("model-dropdown");
if(dropdown) dropdown.value = "";
}

/* ==========================================
LIKE POSTS (ANTI-SPAM)
========================================== */

function likePost(id){

const post = communityPosts.find(p => p.id === id)
if(!post) return

const likeKey = `liked_${id}`

if(localStorage.getItem(likeKey)){
alert("⚠️ You already liked this fix.")
return
}

localStorage.setItem(likeKey, "true")

const postsRef = getCommunityPostsRef()

postsRef.child(id).update({
likes: (post.likes || 0) + 1
})

}