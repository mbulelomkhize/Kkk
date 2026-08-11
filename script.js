/* =====================================
   UniGuide AI — Application Logic
   ===================================== */

/* ---------- Data ---------- */

// Sample qualification data. Replace with the official UniZulu prospectus
// figures before using this in production.
const QUALIFICATIONS = [
  {
    id: "bsc-cs",
    title: "BSc Computer Science",
    faculty: "Science, Agriculture & Engineering",
    aps: 34,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "KwaDlangezwa"],
    subjects: ["Mathematics", "English", "Physical Sciences"],
    careers: ["Software Developer", "Data Analyst", "Systems Administrator"]
  },
  {
    id: "bcom-acc",
    title: "BCom Accounting",
    faculty: "Commerce, Administration & Law",
    aps: 30,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Commerce", "KwaDlangezwa"],
    subjects: ["Mathematics", "English", "Accounting"],
    careers: ["Chartered Accountant", "Auditor", "Financial Analyst"]
  },
  {
    id: "bed-fp",
    title: "BEd Foundation Phase Teaching",
    faculty: "Education",
    aps: 26,
    duration: "4 Years",
    campus: "KwaDlangezwa",
    tags: ["Education"],
    subjects: ["English", "Life Orientation"],
    careers: ["Primary School Teacher", "Curriculum Developer"]
  },
  {
    id: "ba-social",
    title: "BA Social Work",
    faculty: "Humanities & Social Sciences",
    aps: 28,
    duration: "4 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    subjects: ["English", "Life Orientation"],
    careers: ["Social Worker", "Community Development Officer"]
  },
  {
    id: "bsc-nursing",
    title: "BSc Nursing",
    faculty: "Health Sciences",
    aps: 32,
    duration: "4 Years",
    campus: "KwaDlangezwa",
    tags: ["Health Sciences"],
    subjects: ["Mathematics", "Life Sciences", "English"],
    careers: ["Registered Nurse", "Clinical Specialist"]
  }
];

const FACULTIES = [
  "Science, Agriculture & Engineering",
  "Commerce, Administration & Law",
  "Education",
  "Humanities & Social Sciences",
  "Health Sciences"
];

const QUIZ_QUESTIONS = [
  {
    q: "Which activity sounds most like you?",
    options: [
      { text: "Solving puzzles or fixing things", tag: "Science, Agriculture & Engineering" },
      { text: "Managing money or a small project", tag: "Commerce, Administration & Law" },
      { text: "Helping and teaching others", tag: "Education" },
      { text: "Understanding people and society", tag: "Humanities & Social Sciences" },
      { text: "Caring for people's health", tag: "Health Sciences" }
    ]
  },
  {
    q: "Pick a subject you enjoy most.",
    options: [
      { text: "Mathematics / Physical Sciences", tag: "Science, Agriculture & Engineering" },
      { text: "Accounting / Business Studies", tag: "Commerce, Administration & Law" },
      { text: "Life Orientation", tag: "Education" },
      { text: "History / Languages", tag: "Humanities & Social Sciences" },
      { text: "Life Sciences", tag: "Health Sciences" }
    ]
  },
  {
    q: "What kind of impact do you want your career to have?",
    options: [
      { text: "Build or invent something new", tag: "Science, Agriculture & Engineering" },
      { text: "Grow businesses and the economy", tag: "Commerce, Administration & Law" },
      { text: "Shape the next generation", tag: "Education" },
      { text: "Support communities and justice", tag: "Humanities & Social Sciences" },
      { text: "Improve people's wellbeing", tag: "Health Sciences" }
    ]
  }
];

// Grade % -> APS points, standard South African APS scale (7 points max per subject)
function pointsForPercent(pct) {
  if (pct >= 90) return 7;
  if (pct >= 80) return 6;
  if (pct >= 70) return 5;
  if (pct >= 60) return 4;
  if (pct >= 50) return 3;
  if (pct >= 40) return 2;
  if (pct >= 30) return 1;
  return 0;
}

/* ---------- Persistent state (localStorage) ---------- */

const STORAGE_KEY = "uniguide_state_v1";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) throw new Error("no state");
    return JSON.parse(raw);
  } catch (e) {
    return {
      theme: "light",
      chats: 0,
      apsCalculations: 0,
      recommendations: 0,
      savedCourses: [],
      lastAps: null,
      apsHistory: []
    };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();

/* ---------- Navigation ---------- */

const PAGES = ["home", "chat", "aps", "qualifications", "faculties", "quiz", "dashboard", "saved", "settings"];

function showPage(pageId) {
  PAGES.forEach((id) => {
    const el = document.getElementById(`page-${id}`);
    if (el) el.classList.toggle("active", id === pageId);
  });

  document.querySelectorAll(".sidebar li[data-page]").forEach((li) => {
    li.classList.toggle("active", li.dataset.page === pageId);
  });

  if (pageId === "dashboard") renderDashboard();
  if (pageId === "qualifications") renderQualifications();
  if (pageId === "faculties") renderFaculties();
  if (pageId === "saved") renderSaved();
  if (pageId === "quiz") renderQuiz();
}

function initNav() {
  document.querySelectorAll(".sidebar li[data-page]").forEach((li) => {
    li.addEventListener("click", () => showPage(li.dataset.page));
  });

  document.querySelectorAll("[data-goto]").forEach((btn) => {
    btn.addEventListener("click", () => showPage(btn.dataset.goto));
  });
}

/* ---------- Theme ---------- */

function applyTheme() {
  document.body.classList.toggle("dark", state.theme === "dark");
  const btn = document.getElementById("themeBtn");
  if (btn) btn.innerHTML = state.theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
}

function initTheme() {
  applyTheme();
  document.getElementById("themeBtn").addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    saveState();
    applyTheme();
  });
}

/* ---------- Chat ---------- */

function addMessage(role, html) {
  const chatArea = document.getElementById("chatArea");
  const wrap = document.createElement("div");
  wrap.className = role === "user" ? "user-message" : "bot-message";

  if (role === "bot") {
    wrap.innerHTML = `<div class="bot-avatar">🤖</div><div class="message">${html}</div>`;
  } else {
    wrap.innerHTML = `<div class="message">${html}</div>`;
  }

  chatArea.appendChild(wrap);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function showTyping() {
  const chatArea = document.getElementById("chatArea");
  const typing = document.createElement("div");
  typing.className = "typing";
  typing.id = "typingIndicator";
  typing.innerHTML = "<span></span><span></span><span></span>";
  chatArea.appendChild(typing);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function hideTyping() {
  const el = document.getElementById("typingIndicator");
  if (el) el.remove();
}

function findQualificationsMentioned(text) {
  const lower = text.toLowerCase();
  return QUALIFICATIONS.filter((q) => lower.includes(q.title.toLowerCase()));
}

function botReply(userText) {
  const lower = userText.toLowerCase();

  if (lower.includes("aps") && (lower.includes("calc") || lower.includes("score") || lower.includes("what is"))) {
    return `The Admission Point Score (APS) adds up points from your best subjects, where each subject's percentage maps to a score out of 7. Head to the <strong>APS Calculator</strong> page and I'll work it out with you.`;
  }

  if (lower.includes("recommend") || lower.includes("qualification") || lower.includes("course") || lower.includes("degree")) {
    return `I can suggest qualifications based on your APS and interests. Try the <strong>APS Calculator</strong> first, or take the <strong>Career Quiz</strong> if you're not sure what field suits you yet.`;
  }

  if (lower.includes("faculty") || lower.includes("faculties")) {
    return `UniZulu has five faculties: ${FACULTIES.join(", ")}. Check the <strong>Faculties</strong> page for details on each.`;
  }

  if (lower.includes("career") || lower.includes("job")) {
    return `Take the <strong>Career Quiz</strong> — it matches your interests to a faculty and suggested qualifications.`;
  }

  if (lower.includes("requirement") || lower.includes("admission")) {
    const matches = findQualificationsMentioned(userText);
    if (matches.length) {
      const q = matches[0];
      return `${q.title} needs an APS of ${q.aps}+ and typically requires: ${q.subjects.join(", ")}.`;
    }
    return `Admission requirements vary by qualification — each one has a minimum APS and required subjects. Ask me about a specific qualification, e.g. "requirements for BSc Computer Science".`;
  }

  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return `Hello 👋 What would you like to do — calculate your APS, get a recommendation, or explore faculties?`;
  }

  return `I can help with APS calculations, qualification recommendations, admission requirements, and faculty info. Try asking something like "what qualifications can I get with an APS of 30?"`;
}

function handleSend() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  addMessage("user", `<p>${escapeHtml(text)}</p>`);
  input.value = "";

  state.chats += 1;
  saveState();

  showTyping();
  setTimeout(() => {
    hideTyping();
    addMessage("bot", `<p>${botReply(text)}</p>`);
  }, 600 + Math.random() * 500);
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function initChat() {
  document.getElementById("sendBtn").addEventListener("click", handleSend);
  document.getElementById("userInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSend();
  });

  document.getElementById("clearChat").addEventListener("click", () => {
    const chatArea = document.getElementById("chatArea");
    chatArea.innerHTML = "";
    addMessage("bot", `<h3>Welcome to UniGuide AI</h3><p>Chat cleared. What would you like to do next?</p>`);
  });

  document.getElementById("downloadReport").addEventListener("click", downloadReport);

  document.querySelectorAll(".quick-actions button[data-goto]").forEach((btn) => {
    btn.addEventListener("click", () => showPage(btn.dataset.goto));
  });
}

/* ---------- Voice input / output ---------- */

function initVoice() {
  const voiceBtn = document.getElementById("voiceBtn");
  const speakBtn = document.getElementById("speakBtn");
  const input = document.getElementById("userInput");

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.lang = "en-ZA";
    recognition.interimResults = false;

    voiceBtn.addEventListener("click", () => {
      voiceBtn.classList.add("listening");
      recognition.start();
    });

    recognition.addEventListener("result", (e) => {
      input.value = e.results[0][0].transcript;
    });

    recognition.addEventListener("end", () => voiceBtn.classList.remove("listening"));
    recognition.addEventListener("error", () => voiceBtn.classList.remove("listening"));
  } else {
    voiceBtn.addEventListener("click", () => {
      alert("Voice input isn't supported in this browser. Try Chrome or Edge.");
    });
  }

  if ("speechSynthesis" in window) {
    speakBtn.addEventListener("click", () => {
      const messages = document.querySelectorAll(".bot-message .message");
      if (!messages.length) return;
      const last = messages[messages.length - 1].textContent;
      const utter = new SpeechSynthesisUtterance(last);
      utter.lang = "en-ZA";
      speechSynthesis.speak(utter);
    });
  } else {
    speakBtn.addEventListener("click", () => {
      alert("Text-to-speech isn't supported in this browser.");
    });
  }
}

/* ---------- Report download ---------- */

function downloadReport() {
  const lines = [];
  lines.push("UniGuide AI — Session Report");
  lines.push(`Generated: ${new Date().toLocaleString()}`);
  lines.push("");
  lines.push(`Last APS Score: ${state.lastAps ?? "Not calculated yet"}`);
  lines.push(`Total Chats: ${state.chats}`);
  lines.push(`APS Calculations: ${state.apsCalculations}`);
  lines.push(`Recommendations Viewed: ${state.recommendations}`);
  lines.push("");
  lines.push("Saved Courses:");
  if (state.savedCourses.length) {
    state.savedCourses.forEach((id) => {
      const q = QUALIFICATIONS.find((x) => x.id === id);
      if (q) lines.push(`- ${q.title} (APS ${q.aps}, ${q.campus})`);
    });
  } else {
    lines.push("- None yet");
  }

  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "uniguide-report.txt";
  a.click();
  URL.revokeObjectURL(url);
}

/* ---------- APS Calculator ---------- */

function initApsCalculator() {
  const form = document.getElementById("apsForm");
  const rowsContainer = document.getElementById("apsRows");

  const defaultSubjects = ["Home Language", "First Additional Language", "Mathematics", "Life Orientation", "Subject 5", "Subject 6", "Subject 7"];

  defaultSubjects.forEach((name, i) => addApsRow(rowsContainer, name, i === 3));

  document.getElementById("addApsRow").addEventListener("click", () => {
    addApsRow(rowsContainer, `Subject ${rowsContainer.children.length + 1}`, false);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    calculateAps(rowsContainer);
  });
}

function addApsRow(container, name, locked) {
  const row = document.createElement("div");
  row.className = "aps-row";
  row.innerHTML = `
    <input type="text" class="subject-name" value="${escapeHtml(name)}" ${locked ? "" : ""}>
    <input type="number" class="subject-pct" min="0" max="100" placeholder="%" required>
    ${locked ? "" : '<button type="button" class="remove-row" title="Remove subject">&times;</button>'}
  `;
  container.appendChild(row);

  const removeBtn = row.querySelector(".remove-row");
  if (removeBtn) {
    removeBtn.addEventListener("click", () => row.remove());
  }
}

function calculateAps(container) {
  const rows = Array.from(container.querySelectorAll(".aps-row"));
  let total = 0;
  let valid = true;

  rows.forEach((row) => {
    const pctInput = row.querySelector(".subject-pct");
    const pct = parseFloat(pctInput.value);
    if (isNaN(pct) || pct < 0 || pct > 100) {
      valid = false;
      pctInput.classList.add("invalid");
    } else {
      pctInput.classList.remove("invalid");
      total += pointsForPercent(pct);
    }
  });

  if (!valid) {
    document.getElementById("apsResult").textContent = "Please enter a valid percentage (0–100) for every subject.";
    return;
  }

  state.lastAps = total;
  state.apsCalculations += 1;
  state.apsHistory.push({ score: total, date: new Date().toISOString() });
  saveState();

  document.getElementById("apsResult").innerHTML = `
    <div class="aps-score">${total}</div>
    <div class="aps-label">Your APS score</div>
  `;

  renderApsHomeCard();
  renderApsQualificationMatches(total);
}

function renderApsHomeCard() {
  const el = document.getElementById("homeApsScore");
  if (el) el.textContent = state.lastAps ?? "--";
  const fill = document.getElementById("homeApsFill");
  if (fill) fill.style.width = state.lastAps ? `${Math.min(100, (state.lastAps / 42) * 100)}%` : "0%";
}

function renderApsQualificationMatches(aps) {
  const container = document.getElementById("apsMatches");
  if (!container) return;

  const eligible = QUALIFICATIONS.filter((q) => q.aps <= aps).sort((a, b) => b.aps - a.aps);

  if (!eligible.length) {
    container.innerHTML = `<p>No qualifications match this APS yet in our sample list — check the full UniZulu prospectus for more options.</p>`;
    return;
  }

  container.innerHTML = eligible.map(qualificationCardHtml).join("");
  attachCourseCardHandlers(container);
}

/* ---------- Qualifications & recommendation ---------- */

function qualificationCardHtml(q) {
  const saved = state.savedCourses.includes(q.id);
  return `
    <div class="course-card" data-id="${q.id}">
      <div class="course-title">${q.title}</div>
      <div class="course-info">
        <span>APS: ${q.aps}</span>
        <span>${q.duration}</span>
      </div>
      <div class="course-tags">
        ${q.tags.map((t) => `<div class="tag">${t}</div>`).join("")}
      </div>
      <div class="course-card-buttons">
        <button class="apply-btn view-btn" data-id="${q.id}">View Details</button>
        <button class="save-btn" data-id="${q.id}">${saved ? "★ Saved" : "☆ Save"}</button>
      </div>
    </div>
  `;
}

function attachCourseCardHandlers(container) {
  container.querySelectorAll(".view-btn").forEach((btn) => {
    btn.addEventListener("click", () => showQualificationDetail(btn.dataset.id));
  });
  container.querySelectorAll(".save-btn").forEach((btn) => {
    btn.addEventListener("click", () => toggleSaved(btn.dataset.id));
  });
}

function toggleSaved(id) {
  const idx = state.savedCourses.indexOf(id);
  if (idx === -1) state.savedCourses.push(id);
  else state.savedCourses.splice(idx, 1);
  saveState();
  renderQualifications();
  renderSaved();
  const apsMatches = document.getElementById("apsMatches");
  if (apsMatches && state.lastAps != null) renderApsQualificationMatches(state.lastAps);
}

function showQualificationDetail(id) {
  const q = QUALIFICATIONS.find((x) => x.id === id);
  if (!q) return;

  state.recommendations += 1;
  saveState();

  const modal = document.getElementById("detailModal");
  document.getElementById("detailModalBody").innerHTML = `
    <h2>${q.title}</h2>
    <p><strong>Faculty:</strong> ${q.faculty}</p>
    <p><strong>Campus:</strong> ${q.campus}</p>
    <p><strong>Duration:</strong> ${q.duration}</p>
    <p><strong>Minimum APS:</strong> ${q.aps}</p>
    <p><strong>Key subjects:</strong> ${q.subjects.join(", ")}</p>
    <p><strong>Career paths:</strong> ${q.careers.join(", ")}</p>
  `;
  modal.classList.add("active");
}

function initModal() {
  document.getElementById("detailModalClose").addEventListener("click", () => {
    document.getElementById("detailModal").classList.remove("active");
  });
  document.getElementById("detailModal").addEventListener("click", (e) => {
    if (e.target.id === "detailModal") e.target.classList.remove("active");
  });
}

function renderQualifications() {
  const container = document.getElementById("qualificationsList");
  if (!container) return;
  container.innerHTML = QUALIFICATIONS.map(qualificationCardHtml).join("");
  attachCourseCardHandlers(container);
}

function renderSaved() {
  const container = document.getElementById("savedList");
  if (!container) return;
  const saved = QUALIFICATIONS.filter((q) => state.savedCourses.includes(q.id));
  if (!saved.length) {
    container.innerHTML = `<p>You haven't saved any qualifications yet. Browse <button class="link-btn" data-goto="qualifications">Qualifications</button> and tap Save.</p>`;
    container.querySelector("[data-goto]").addEventListener("click", (e) => showPage(e.target.dataset.goto));
    return;
  }
  container.innerHTML = saved.map(qualificationCardHtml).join("");
  attachCourseCardHandlers(container);
}

/* ---------- Faculties ---------- */

function renderFaculties() {
  const container = document.getElementById("facultiesList");
  if (!container) return;
  container.innerHTML = FACULTIES.map((f) => {
    const count = QUALIFICATIONS.filter((q) => q.faculty === f).length;
    return `<div class="faculty" data-faculty="${f}">${f}<br><small>${count} qualification${count === 1 ? "" : "s"}</small></div>`;
  }).join("");

  container.querySelectorAll(".faculty").forEach((el) => {
    el.addEventListener("click", () => {
      showPage("qualifications");
      const container2 = document.getElementById("qualificationsList");
      const filtered = QUALIFICATIONS.filter((q) => q.faculty === el.dataset.faculty);
      container2.innerHTML = filtered.length
        ? filtered.map(qualificationCardHtml).join("")
        : `<p>No sample qualifications listed for this faculty yet.</p>`;
      attachCourseCardHandlers(container2);
    });
  });
}

/* ---------- Career Quiz ---------- */

let quizIndex = 0;
let quizScores = {};

function renderQuiz() {
  quizIndex = 0;
  quizScores = {};
  FACULTIES.forEach((f) => (quizScores[f] = 0));
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const container = document.getElementById("quizContainer");
  if (quizIndex >= QUIZ_QUESTIONS.length) {
    renderQuizResult(container);
    return;
  }

  const question = QUIZ_QUESTIONS[quizIndex];
  container.innerHTML = `
    <div class="quiz-progress">Question ${quizIndex + 1} of ${QUIZ_QUESTIONS.length}</div>
    <h3>${question.q}</h3>
    <div class="quiz-options">
      ${question.options.map((opt, i) => `<button class="quiz-option" data-i="${i}">${opt.text}</button>`).join("")}
    </div>
  `;

  container.querySelectorAll(".quiz-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      const opt = question.options[parseInt(btn.dataset.i, 10)];
      quizScores[opt.tag] += 1;
      quizIndex += 1;
      renderQuizQuestion();
    });
  });
}

function renderQuizResult(container) {
  const topFaculty = Object.entries(quizScores).sort((a, b) => b[1] - a[1])[0][0];
  const matches = QUALIFICATIONS.filter((q) => q.faculty === topFaculty);

  state.recommendations += 1;
  saveState();

  container.innerHTML = `
    <h3>Your best-fit faculty: ${topFaculty}</h3>
    <p>Based on your answers, here are qualifications in that faculty:</p>
    <div class="course-grid" id="quizMatches"></div>
    <button class="apply-btn" id="retakeQuiz">Retake Quiz</button>
  `;

  const matchesEl = document.getElementById("quizMatches");
  matchesEl.innerHTML = matches.length
    ? matches.map(qualificationCardHtml).join("")
    : `<p>No sample qualifications listed for this faculty yet.</p>`;
  attachCourseCardHandlers(matchesEl);

  document.getElementById("retakeQuiz").addEventListener("click", renderQuiz);
}

/* ---------- Dashboard ---------- */

function renderDashboard() {
  document.getElementById("dashChats").textContent = state.chats;
  document.getElementById("dashAps").textContent = state.apsCalculations;
  document.getElementById("dashRecs").textContent = state.recommendations;
  document.getElementById("dashSaved").textContent = state.savedCourses.length;
  document.getElementById("dashLastAps").textContent = state.lastAps ?? "--";
}

/* ---------- Settings ---------- */

function initSettings() {
  const resetBtn = document.getElementById("resetData");
  if (!resetBtn) return;
  resetBtn.addEventListener("click", () => {
    if (confirm("This clears all saved APS scores, saved courses, and stats. Continue?")) {
      localStorage.removeItem(STORAGE_KEY);
      state = loadState();
      applyTheme();
      renderDashboard();
      renderSaved();
      renderApsHomeCard();
    }
  });
}

/* ---------- Init ---------- */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initTheme();
  initChat();
  initVoice();
  initApsCalculator();
  initModal();
  initSettings();

  renderApsHomeCard();
  renderQualifications();
  renderFaculties();
  renderDashboard();
  renderSaved();

  showPage("home");
});
