import {
  db,
  collection,
  addDoc,
  getDocs,
  query,
  where
} from "./firebase.js";

// WAIT FOR PAGE
document.addEventListener("DOMContentLoaded", async () => {

  // GET CODE FROM URL
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  if (!code || !dtcDatabase[code]) {
    document.body.innerHTML = "<h1>Invalid Code</h1>";
    return;
  }

  const dtc = dtcDatabase[code];

  // DISPLAY INFO
  document.getElementById("codeDisplay").innerText = dtc.code;
  document.getElementById("descriptionDisplay").innerText = dtc.description;

  // LOAD FIXES
  loadFixes(code);

  // HANDLE FORM
  const form = document.getElementById("fixForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submission = {
      code,
      name: document.getElementById("userName").value,
      part: document.getElementById("part").value,
      description: document.getElementById("description").value,
      createdAt: Date.now(),
      votes: 0
    };

    await addDoc(collection(db, "fixes"), submission);

    alert("Fix submitted!");

    form.reset();
    loadFixes(code);
  });

});


// LOAD FIXES FUNCTION
async function loadFixes(code) {
  const container = document.getElementById("fixesContainer");

  if (!container) return;

  container.innerHTML = "Loading...";

  const q = query(collection(db, "fixes"), where("code", "==", code));
  const snapshot = await getDocs(q);

  container.innerHTML = "";

  snapshot.forEach(doc => {
    const fix = doc.data();

    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${fix.name}</strong>
      <p>${fix.part}</p>
      <p>${fix.description}</p>
      <hr>
    `;

    container.appendChild(div);
  });
}