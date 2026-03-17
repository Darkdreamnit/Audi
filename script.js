/* ==========================================
   GLOBAL STATE
========================================== */

let firebaseInitialized = false;
let communityPosts = [];
let submitting = false;


/* ==========================================
   PAGE LOAD
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  console.log("App Initialized");

  try {
    firebaseInitialized = initFirebase();
  } catch (e) {
    console.error("Firebase failed:", e);
    firebaseInitialized = false;
  }

  initSubmissionForm();

  if (firebaseInitialized) {
    loadCommunityPosts();
  }

});


/* ==========================================
   MODAL CONTROLS
========================================== */

function openSubmissionModal() {
  document.getElementById("submission-modal").classList.remove("hidden");
}

function closeSubmissionModal() {
  document.getElementById("submission-modal").classList.add("hidden");
  document.getElementById("submission-form").reset();
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
   SUBMIT FIX (IMPROVED + SAFE)
========================================== */

async function submitCommunityFix(event) {

  event.preventDefault();

  if (submitting) return;
  submitting = true;

  const button = document.querySelector("#submission-form button[type='submit']");
  if (button) button.disabled = true;

  try {

    const code = document.getElementById("submit-code").value.toUpperCase();
    const model = document.getElementById("submit-model").value;
    const year = document.getElementById("submit-year").value;
    const solution = document.getElementById("submit-solution").value;
    const cost = document.getElementById("submit-cost").value;
    const author = document.getElementById("submit-name").value || "Anonymous";

    const file = document.getElementById("submit-photo").files[0];

    /* Image validation */
    if (file && file.size > 3 * 1024 * 1024) {
      alert("Image must be under 3MB");
      submitting = false;
      button.disabled = false;
      return;
    }

    let imageURL = null;

    /* Upload image */
    if (file && firebaseInitialized) {

      const imageRef = firebaseStorage
        .ref("community/" + Date.now() + "-" + file.name);

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
      date: Date.now(),
      likes: 0
    };

    const postsRef = getCommunityPostsRef();
    await postsRef.push(post);

    alert("✅ Fix shared successfully!");
    closeSubmissionModal();

  } catch (err) {
    console.error(err);
    alert("❌ Error submitting fix.");
  }

  submitting = false;
  if (button) button.disabled = false;
}


/* ==========================================
   LOAD COMMUNITY POSTS
========================================== */

function loadCommunityPosts() {

  const postsRef = getCommunityPostsRef();

  postsRef.on("value", snapshot => {

    const data = snapshot.val();

    communityPosts = data
      ? Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }))
      : [];

    displayCommunityPosts();

  });

}


/* ==========================================
   DISPLAY POSTS (🔥 MODERN AUDI UI)
========================================== */

function displayCommunityPosts() {

  const container = document.getElementById("community-grid");
  if (!container) return;

  if (communityPosts.length === 0) {
    container.innerHTML = `
      <div class="text-center text-slate-400 py-10">
        No fixes shared yet
      </div>`;
    return;
  }

  container.innerHTML = communityPosts.map(post => `

  <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden
              hover:border-red-500 transition duration-300 shadow-lg">

    ${post.image ? `
    <img src="${post.image}" class="w-full h-48 object-cover">
    ` : ""}

    <div class="p-5">

      <!-- HEADER -->
      <div class="flex justify-between items-center mb-3">

        <span class="bg-red-600 text-white text-xs px-3 py-1 rounded font-bold">
          ${post.code}
        </span>

        <span class="text-xs text-slate-400">
          ${formatDate(post.date)}
        </span>

      </div>

      <!-- VEHICLE -->
      <h3 class="text-white font-semibold text-lg">
        ${post.model || "Audi"} ${post.year || ""}
      </h3>

      <!-- FIX -->
      <p class="text-slate-300 text-sm mt-3 leading-relaxed">
        ${post.solution}
      </p>

      <!-- COST -->
      ${post.cost ? `
      <div class="mt-3">
        <span class="text-xs text-slate-400">Repair Cost</span>
        <div class="text-green-400 font-semibold">
          $${post.cost}
        </div>
      </div>
      ` : ""}

      <!-- FOOTER -->
      <div class="flex justify-between items-center mt-4 pt-3 border-t border-slate-800">

        <span class="text-xs text-slate-500">
          by ${post.author}
        </span>

        <button onclick="likePost('${post.id}')"
          class="text-xs text-red-400 hover:text-red-500">

          ❤️ ${post.likes || 0}
        </button>

      </div>

    </div>

  </div>

  `).join("");
}


/* ==========================================
   LIKE SYSTEM
========================================== */

function likePost(postId) {

  const postRef = getCommunityPostsRef().child(postId);

  postRef.transaction(post => {
    if (post) {
      post.likes = (post.likes || 0) + 1;
    }
    return post;
  });

}


/* ==========================================
   HELPERS
========================================== */

function formatDate(timestamp) {
  if (!timestamp) return "";
  const date = new Date(timestamp);
  return date.toLocaleDateString();
}


/* ==========================================
   UI HELPERS
========================================== */

function toggleCustomField(select, fieldId) {
  const field = document.getElementById(fieldId);
  field.classList.toggle("hidden", select.value !== "other");
}


function previewPhoto(input) {

  const file = input.files[0];
  if (!file) return;

  const preview = document.getElementById("photo-preview");
  const container = document.getElementById("photo-preview-container");

  const reader = new FileReader();

  reader.onload = e => {
    preview.src = e.target.result;
    preview.classList.remove("hidden");
    container.classList.add("hidden");
  };

  reader.readAsDataURL(file);
}


function handleDragOver(e) {
  e.preventDefault();
}


function handleDrop(e) {
  e.preventDefault();
  const input = document.getElementById("submit-photo");
  input.files = e.dataTransfer.files;
  previewPhoto(input);
}