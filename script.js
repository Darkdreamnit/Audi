/* ==========================================
FIREBASE INIT
========================================== */

let firebaseInitialized = false;
let firebaseStorage = null;
let communityPosts = [];
let submitting = false;

function initFirebase(){
  const firebaseConfig = {
    apiKey: "AIzaSyA1byZuKmj7ZyjTLZvLDtUl4qfLuyiFDbo",
  authDomain: "audi-dtc-pro.firebaseapp.com",
  databaseURL: "https://audi-dtc-pro-default-rtdb.firebaseio.com",
  projectId: "audi-dtc-pro",
  storageBucket: "audi-dtc-pro.firebasestorage.app",
  messagingSenderId: "1098221329925",
  appId: "1:1098221329925:web:0a12d9e67b1a313a02466c"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  firebaseStorage = firebase.storage();

  return true;
}

function getCommunityPostsRef(){
  return firebase.database().ref("communityPosts");
}

/* ==========================================
IMAGE COMPRESSION
========================================== */

function compressImage(file, maxWidth = 1200, quality = 0.7) {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = function(e) {
      const img = new Image();

      img.onload = function() {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(blob => {
          resolve(blob);
        }, "image/jpeg", quality);
      };

      img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  });
}

/* ==========================================
INIT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  try {
    firebaseInitialized = initFirebase();
  } catch (e) {
    console.error("Firebase failed:", e);
  }

  initSubmissionForm();
  loadCommunityPosts();
});

/* ==========================================
MODAL
========================================== */

function openSubmissionModal(){
  document.getElementById("submission-modal").classList.remove("hidden");
}

function closeSubmissionModal(){
  const modal = document.getElementById("submission-modal");
  const form = document.getElementById("submission-form");

  modal.classList.add("hidden");
  form.reset();

  document.getElementById("photo-preview-container").innerHTML = `
    <p class="text-sm text-slate-600">Click to upload or drag and drop</p>
  `;
}

/* ==========================================
FORM SETUP
========================================== */

function initSubmissionForm(){
  const form = document.getElementById("submission-form");
  form.addEventListener("submit", submitCommunityFix);
}

/* ==========================================
SUBMIT FIX (FULLY FIXED)
========================================== */

async function submitCommunityFix(e){
  e.preventDefault();

  if(submitting) return;
  submitting = true;

  const btn = document.querySelector("#submission-form button");
  btn.disabled = true;

  try {

    let code = document.getElementById("submit-code").value.trim();
    let model = document.getElementById("submit-model").value.trim();
    let year = document.getElementById("submit-year").value.trim();

    const solution = document.getElementById("submit-solution").value.trim();
    const cost = document.getElementById("submit-cost").value.trim();
    const author = document.getElementById("submit-name").value.trim() || "Anonymous";

    // ✅ CUSTOM FIELDS
    if(code === "other"){
      code = document.getElementById("custom-code").value.trim();
    }

    if(model === "other"){
      model = document.getElementById("custom-model").value.trim();
    }

    if(year === "other"){
      year = document.getElementById("custom-year").value.trim();
    }

    // ✅ VALIDATION
    if(!code || !model || !solution){
      alert("Please fill required fields");
      throw new Error("Validation failed");
    }

    const files = Array.from(document.getElementById("submit-photo").files);

    let imageURLs = [];

    for(const file of files){

      if(file.size > 5 * 1024 * 1024){
        alert("Each image must be under 5MB");
        continue;
      }

      const compressed = await compressImage(file);

      const ref = firebaseStorage.ref("community/" + Date.now() + "-" + file.name);
      await ref.put(compressed);

      const url = await ref.getDownloadURL();
      imageURLs.push(url);
    }

    // ✅ DUPLICATE CHECK
    const duplicate = communityPosts.find(p =>
      p.code === code &&
      p.model === model &&
      p.solution === solution
    );

    if(duplicate){
      alert("Already submitted");
      throw new Error("Duplicate");
    }

    const post = {
      code,
      model,
      year,
      solution,
      cost,
      author,
      images: imageURLs,
      date: new Date().toISOString(),
      likes: 0
    };

    await getCommunityPostsRef().push(post);

    alert("✅ Fix shared!");
    closeSubmissionModal();

  } catch(err){
    console.error(err);
    alert("❌ Error submitting fix");
  }

  submitting = false;
  btn.disabled = false;
}

/* ==========================================
LOAD POSTS
========================================== */

function loadCommunityPosts(){

  getCommunityPostsRef().on("value", snap => {

    const data = snap.val();

    communityPosts = data
      ? Object.keys(data).map(id => ({ id, ...data[id] }))
      : [];

    displayPosts();
  });
}

/* ==========================================
DISPLAY POSTS
========================================== */

function displayPosts(posts = communityPosts){

  const container = document.getElementById("community-grid");

  if(!posts.length){
    container.innerHTML = "<p>No fixes yet</p>";
    return;
  }

  container.innerHTML = posts.map(p => `
    <div class="bg-white p-4 rounded-xl shadow">
      <span class="text-xs bg-red-100 px-2 py-1 rounded">${p.code}</span>
      <h3 class="font-bold">${p.model} ${p.year || ""}</h3>
      <p class="text-sm mt-2">${p.solution}</p>
      <div class="text-xs mt-2">${p.author}</div>
    </div>
  `).join("");
}

/* ==========================================
CUSTOM FIELD TOGGLE
========================================== */

function toggleCustomField(select, fieldId){
  const field = document.getElementById(fieldId);

  if(select.value === "other"){
    field.classList.remove("hidden");
  } else {
    field.classList.add("hidden");
  }
}