/* ============================================================
   script.js – Logic chính cho Thi Thử Toán Lớp 1
   ============================================================ */

/* ============================================================
   DỮ LIỆU BÀI THI – TUẦN 1
   Mỗi câu có: id, loại (mcq | essay), nội dung câu hỏi,
   đáp án đúng (answer), và các lựa chọn nếu là trắc nghiệm
   ============================================================ */
const EXAM_DATA = {
  1: {
    title: "Tuần 1 – So sánh & Tính toán",
    sections: [
      /* ---- I. TRẮC NGHIỆM ---- */
      {
        id: "mcq",
        label: "I. Trắc Nghiệm",
        icon: "🔢",
        questions: [
          {
            id: "q1", type: "mcq",
            text: "Cho 21 ... 12. Dấu cần điền là:",
            options: [">", "<", "=", "+"],
            answer: ">"
          },
          {
            id: "q2", type: "mcq",
            text: "Cho 20 ... 30. Dấu cần điền là:",
            options: [">", "<", "=", "+"],
            answer: "<"
          },
          {
            id: "q3", type: "mcq",
            text: "Cho 20 ... 10. Dấu cần điền là:",
            options: [">", "<", "=", "+"],
            answer: ">"
          },
          {
            id: "q4", type: "mcq",
            text: "Cho 17 ... 18. Dấu cần điền là:",
            options: [">", "<", "=", "+"],
            answer: "<"
          },
          {
            id: "q5", type: "mcq",
            text: "Cho 12 ... 19. Dấu cần điền là:",
            options: [">", "<", "=", "+"],
            answer: "<"
          },
          {
            id: "q6", type: "mcq",
            text: "Cho 15 < ... Số thích hợp điền vào chỗ chấm là:",
            options: ["16", "15", "14", "10"],
            answer: "16"
          },
          {
            id: "q7", type: "mcq",
            text: "Cho 18 > ... Số thích hợp điền vào chỗ chấm là:",
            options: ["17", "18", "19", "20"],
            answer: "17"
          },
          {
            id: "q8", type: "mcq",
            text: "Cho 18 = ... Số thích hợp điền vào chỗ chấm là:",
            options: ["17", "16", "18", "19"],
            answer: "18"
          },
          {
            id: "q9", type: "mcq",
            text: "Các số: 15, 10, 17 được xếp theo thứ tự từ bé đến lớn:",
            options: ["10, 17, 15", "10, 15, 17", "15, 10, 17", "17, 15, 10"],
            answer: "10, 15, 17"
          },
          {
            id: "q10", type: "mcq",
            text: "Các số: 14, 12, 20 được xếp theo thứ tự từ bé đến lớn:",
            options: ["12, 14, 20", "14, 12, 20", "20, 14, 12", "20, 12, 14"],
            answer: "12, 14, 20"
          },
          {
            id: "q11", type: "mcq",
            text: "Các số: 19, 13, 16 được xếp theo thứ tự từ bé đến lớn:",
            options: ["16, 13, 19", "19, 16, 13", "13, 16, 19", "13, 19, 16"],
            answer: "13, 16, 19"
          },
          {
            id: "q12", type: "mcq",
            text: "Các số: 15, 11, 18 được xếp theo thứ tự từ bé đến lớn:",
            options: ["15, 11, 18", "11, 15, 18", "11, 18, 15", "18, 15, 11"],
            answer: "11, 15, 18"
          }
        ]
      },
      /* ---- II. BÀI TOÁN TỰ LUẬN ---- */
      {
        id: "essay",
        label: "II. Bài Toán Tự Luận",
        icon: "✏️",
        questions: [
          /* Bài 1: Tính */
          {
            id: "e1a", type: "essay", section: "Bài 1: Tính",
            // Câu hỏi hiển thị trên 1 dòng: "1 + 1 ="
            rows: [
              { label: "1 + 1 =", inputId: "e1a_1", answer: "2" },
              { label: "1 + 2 =", inputId: "e1a_2", answer: "3" },
              { label: "8 – 3 =", inputId: "e1a_3", answer: "5" },
              { label: "4 + 2 =", inputId: "e1a_4", answer: "6" }
            ]
          },
          /* Bài 2: Điền dấu >, <, = */
          {
            id: "e2a", type: "essay", section: "Bài 2: Điền dấu >, <, =",
            rows: [
              { label: "14 + 5  ...(>/</ =)...  15", inputId: "e2a_1", answer: ">" },
              { label: "17  ...(>/</ =)...  12 + 6", inputId: "e2a_2", answer: ">" }
            ]
          },
          /* Bài 21: Điền dấu >, <, = */
          {
            id: "e21a", type: "essay", section: "Bài 21: Điền dấu >, <, =",
            rows: [
              { label: "16  ...(>/</ =)...  10 – 1", inputId: "e21a_1", answer: ">" },
              { label: "15 – 3  ...(>/</ =)...  14", inputId: "e21a_2", answer: "<" }
            ]
          },
          /* Bài 22: Điền dấu >, <, = */
          {
            id: "e22a", type: "essay", section: "Bài 22: Điền dấu >, <, =",
            rows: [
              { label: "14 + 3  ...(>/</ =)...  10", inputId: "e22a_1", answer: ">" },
              { label: "19  ...(>/</ =)...  10 – 5", inputId: "e22a_2", answer: ">" }
            ]
          },
          /* Bài 23: Điền dấu >, <, = */
          {
            id: "e23a", type: "essay", section: "Bài 23: Điền dấu >, <, =",
            rows: [
              { label: "16  ...(>/</ =)...  6 + 10", inputId: "e23a_1", answer: "=" },
              { label: "17 – 4  ...(>/</ =)...  14", inputId: "e23a_2", answer: "<" }
            ]
          },
          /* Bài 5: Tính */
          {
            id: "e5a", type: "essay", section: "Bài 5: Tính",
            rows: [
              { label: "2 + 6 + 1 =", inputId: "e5a_1", answer: "9" },
              { label: "9 – 4 – 1 =", inputId: "e5a_2", answer: "4" },
              { label: "4 + 5 + 1 =", inputId: "e5a_3", answer: "10" },
              { label: "6 – 4 – 2 =", inputId: "e5a_4", answer: "0" }
            ]
          },
          /* Bài 6: Tính */
          {
            id: "e6a", type: "essay", section: "Bài 6: Tính",
            rows: [
              { label: "8 – 3 – 2 =", inputId: "e6a_1", answer: "3" },
              { label: "6 – 2 – 3 =", inputId: "e6a_2", answer: "1" },
              { label: "4 – 3 – 1 =", inputId: "e6a_3", answer: "0" },
              { label: "5 + 3 + 2 =", inputId: "e6a_4", answer: "10" }
            ]
          },
          /* Bài 11: Viết chuỗi số */
          {
            id: "e11a", type: "essay", section: "Bài 11: Viết các số từ 5 đến 9",
            rows: [
              { label: "Viết số từ 5 đến 9 (cách nhau dấu phẩy):", inputId: "e11a_1", answer: "5, 6, 7, 8, 9", hint: "Ví dụ: 5, 6, 7, 8, 9", longInput: true }
            ]
          },
          /* Bài 12: Viết chuỗi số */
          {
            id: "e12a", type: "essay", section: "Bài 12: Viết các số từ 10 đến 0",
            rows: [
              { label: "Viết số từ 10 đến 0 (cách nhau dấu phẩy):", inputId: "e12a_1", answer: "10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0", hint: "Ví dụ: 10, 9, ..., 0", longInput: true }
            ]
          },
          /* Bài 13: Viết chuỗi số */
          {
            id: "e13a", type: "essay", section: "Bài 13: Viết các số từ 1 đến 5",
            rows: [
              { label: "Viết số từ 1 đến 5 (cách nhau dấu phẩy):", inputId: "e13a_1", answer: "1, 2, 3, 4, 5", hint: "Ví dụ: 1, 2, 3, 4, 5", longInput: true }
            ]
          },
          /* Bài 14: Viết chuỗi số */
          {
            id: "e14a", type: "essay", section: "Bài 14: Viết các số từ 0 đến 10",
            rows: [
              { label: "Viết số từ 0 đến 10 (cách nhau dấu phẩy):", inputId: "e14a_1", answer: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10", hint: "Ví dụ: 0, 1, ..., 10", longInput: true }
            ]
          }
        ]
      }
    ]
  }
};

/* ============================================================
   STATE
   ============================================================ */
let currentWeek = null;   // Tuần đang thi
let currentExam = null;   // Dữ liệu bài thi hiện tại
let allAnswerables = [];  // Danh sách tất cả input cần chấm điểm

/* ============================================================
   BACKGROUND STARS
   ============================================================ */
(function initStars() {
  const EMOJIS = ["⭐", "🌟", "✨", "🎈", "💛", "🌈"];
  const container = document.getElementById("bg-stars");
  for (let i = 0; i < 18; i++) {
    const el = document.createElement("div");
    el.className = "star";
    el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = (12 + Math.random() * 16) + "s";
    el.style.animationDelay = (Math.random() * 20) + "s";
    el.style.fontSize = (0.9 + Math.random() * 1.1) + "rem";
    container.appendChild(el);
  }
})();

/* ============================================================
   SCREEN NAVIGATION
   ============================================================ */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ============================================================
   START EXAM
   ============================================================ */
function startExam(weekNum) {
  currentWeek = weekNum;
  currentExam = EXAM_DATA[weekNum];
  if (!currentExam) return;

  allAnswerables = [];
  renderExam(currentExam);
  showScreen("screen-exam");
  updateProgress();
}

/* ============================================================
   RENDER EXAM
   ============================================================ */
function renderExam(exam) {
  // Tiêu đề
  document.getElementById("exam-title-bar").textContent = "📝 " + exam.title;
  // Xoá nội dung cũ
  const body = document.getElementById("exam-body");
  body.innerHTML = "";

  exam.sections.forEach(section => {
    // Section header
    const hdr = document.createElement("div");
    hdr.className = "section-header";
    hdr.innerHTML = `<span>${section.icon}</span> ${section.label}`;
    body.appendChild(hdr);

    section.questions.forEach((q, idx) => {
      if (q.type === "mcq") {
        body.appendChild(renderMCQ(q, idx + 1));
      } else if (q.type === "essay") {
        body.appendChild(renderEssay(q));
      }
    });
  });

  // Gắn sự kiện progress
  body.querySelectorAll("input").forEach(inp => {
    inp.addEventListener("input", updateProgress);
    inp.addEventListener("change", updateProgress);
  });
}

/* ---- MCQ card ---- */
function renderMCQ(q, num) {
  function escapeHTML(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  const card = document.createElement("div");
  card.className = "question-card";

  const labels = ["a", "b", "c", "d"];
  const optionHTML = q.options.map((opt, i) => `
    <label class="option-label" for="${q.id}_opt${i}">
      <input type="radio" id="${q.id}_opt${i}" name="${q.id}" value="${escapeHTML(opt)}" />
      <span class="option-text"><strong>${labels[i]}.</strong> ${escapeHTML(opt)}</span>
    </label>
  `).join("");

  card.innerHTML = `
    <div class="question-number">Câu ${num}</div>
    <div class="question-text">${escapeHTML(q.text)}</div>
    <div class="options-list">${optionHTML}</div>
  `;

  // Đăng ký để chấm điểm
  allAnswerables.push({
    id: q.id, type: "mcq", answer: q.answer,
    label: `Câu ${num}: ${q.text}`,
    getVal: () => {
      const sel = document.querySelector(`input[name="${q.id}"]:checked`);
      return sel ? sel.value : "";
    }
  });

  return card;
}

/* ---- Essay card ---- */
function renderEssay(q) {
  const card = document.createElement("div");
  card.className = "question-card type-essay";

  function escapeHTML(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  let rowsHTML = q.rows.map(row => {
    const cls = row.longInput ? "inline-input long" : "inline-input short";
    const placeholder = row.hint ? row.hint : "?";
    const inputHTML = `<input type="text" class="${cls}" id="${row.inputId}"
               placeholder="${placeholder}" autocomplete="off" spellcheck="false" />`;
    
    let displayHTML = "";
    if (row.label.includes("...(>/</ =)...")) {
      const parts = row.label.split("...(>/</ =)...");
      displayHTML = `<span>${escapeHTML(parts[0])}</span> ${inputHTML} <span>${escapeHTML(parts[1])}</span>`;
    } else {
      displayHTML = `<span>${escapeHTML(row.label)}</span>\n        ${inputHTML}`;
    }

    return `
      <div class="essay-row">
        ${displayHTML}
      </div>
    `;
  }).join("");

  card.innerHTML = `
    <div class="question-number">✏️ Tự Luận</div>
    <div class="question-text">${q.section}</div>
    ${rowsHTML}
  `;

  // Đăng ký từng ô nhập để chấm điểm
  q.rows.forEach(row => {
    allAnswerables.push({
      id: row.inputId, type: "essay", answer: row.answer,
      label: `${q.section} – ${row.label.replace("...(>/</ =)...", "[dấu]")}`,
      getVal: () => {
        const el = document.getElementById(row.inputId);
        return el ? el.value.trim() : "";
      }
    });
  });

  return card;
}

/* ============================================================
   PROGRESS BAR
   ============================================================ */
function updateProgress() {
  if (!allAnswerables.length) return;
  let filled = 0;
  allAnswerables.forEach(a => {
    if (a.getVal && a.getVal() !== "") filled++;
  });
  const pct = Math.round((filled / allAnswerables.length) * 100);
  document.getElementById("exam-progress-bar").style.width = pct + "%";
}

/* ============================================================
   BACK TO HOME
   ============================================================ */
function backToHome() {
  currentWeek = null;
  currentExam = null;
  allAnswerables = [];
  showScreen("screen-home");
}

/* ============================================================
   SUBMIT EXAM – CHẤM ĐIỂM
   ============================================================ */
function submitExam() {
  const studentName = document.getElementById("student-name").value.trim() || "Bạn Học Sinh";

  let correctCount = 0;
  const reviewItems = [];

  allAnswerables.forEach(item => {
    const raw = item.getVal();
    // Chuẩn hoá: bỏ dấu cách thừa, viết thường để so sánh mềm
    const userAns = normalizeAnswer(raw);
    const correct  = normalizeAnswer(item.answer);
    const isOk     = (userAns === correct);

    if (isOk) correctCount++;

    reviewItems.push({
      label: item.label,
      userAns: raw || "(Chưa trả lời)",
      correctAns: item.answer,
      isOk
    });
  });

  const total = allAnswerables.length;
  const wrongCount = total - correctCount;
  // Thang điểm 10
  const score = total > 0 ? Math.round((correctCount / total) * 10 * 10) / 10 : 0;

  showResult({ studentName, correctCount, wrongCount, total, score, reviewItems });
}

/* Chuẩn hoá đáp án để so sánh linh hoạt */
function normalizeAnswer(str) {
  if (!str) return "";
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")          // thu gọn khoảng trắng
    .replace(/,\s*/g, ", ")        // chuẩn hoá dấu phẩy
    .replace(/–/g, "-")            // thống nhất dấu trừ
    .replace(/\u2013|\u2014/g, "-");
}

/* ============================================================
   SHOW RESULT
   ============================================================ */
function showResult({ studentName, correctCount, wrongCount, total, score, reviewItems }) {
  showScreen("screen-result");

  // Tên học sinh
  document.getElementById("result-student-name").textContent = studentName;

  // Điểm
  document.getElementById("score-number").textContent = score % 1 === 0 ? score : score.toFixed(1);
  document.getElementById("correct-count").textContent = correctCount;
  document.getElementById("wrong-count").textContent = wrongCount;
  document.getElementById("total-count").textContent = total;

  // Thông điệp & emoji theo điểm
  const hdr = document.getElementById("result-header");
  const emoji = document.getElementById("result-emoji");
  const msg   = document.getElementById("result-message");

  hdr.classList.remove("poor", "good", "excellent");
  if (score >= 9) {
    hdr.classList.add("excellent");
    emoji.textContent = "🏆";
    msg.textContent = "Xuất sắc! Em học giỏi lắm! 🎉";
    launchConfetti();
  } else if (score >= 7) {
    hdr.classList.add("good");
    emoji.textContent = "😊";
    msg.textContent = "Giỏi lắm! Cố gắng thêm nhé! 👍";
  } else if (score >= 5) {
    hdr.classList.add("good");
    emoji.textContent = "🙂";
    msg.textContent = "Làm được rồi! Ôn thêm một chút nữa nhé!";
  } else {
    hdr.classList.add("poor");
    emoji.textContent = "💪";
    msg.textContent = "Cố lên! Lần sau em sẽ làm tốt hơn!";
  }

  // Score circle animation
  const deg = (score / 10) * 360;
  const circleColor = score >= 7 ? "#66BB6A" : score >= 5 ? "#FF8F00" : "#EF5350";
  document.getElementById("score-circle").style.background =
    `conic-gradient(${circleColor} ${deg}deg, #F0F0F0 ${deg}deg)`;
  document.getElementById("score-number").style.color = circleColor;

  // Review list
  const reviewList = document.getElementById("review-list");
  reviewList.innerHTML = reviewItems.map(item => `
    <div class="review-item ${item.isOk ? "ok" : "fail"}">
      <strong>${item.isOk ? "✅" : "❌"} ${item.label}</strong><br/>
      Em trả lời: <em>${item.userAns}</em>
      ${item.isOk ? "" : ` &nbsp;|&nbsp; Đáp án đúng: <strong>${item.correctAns}</strong>`}
    </div>
  `).join("");
}

/* ============================================================
   RETRY EXAM
   ============================================================ */
function retryExam() {
  if (currentWeek) startExam(currentWeek);
}

/* ============================================================
   CONFETTI – Hiệu ứng pháo giấy khi đạt điểm cao
   ============================================================ */
function launchConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const COLORS = ["#FF6B35","#FFD600","#66BB6A","#42A5F5","#AB47BC","#EC407A","#FF8F00","#26C6DA"];
  const pieces = [];

  for (let i = 0; i < 160; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: 8 + Math.random() * 12,
      h: 4 + Math.random() * 8,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.2,
      vx: (Math.random() - 0.5) * 3,
      vy: 2 + Math.random() * 4,
      alpha: 1
    });
  }

  let frame;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach((p, idx) => {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();

      p.x += p.vx;
      p.y += p.vy;
      p.angle += p.spin;
      p.vy += 0.05; // gravity
      if (p.y > canvas.height) {
        p.alpha -= 0.04;
      }
    });

    const alive = pieces.some(p => p.alpha > 0);
    if (alive) {
      frame = requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(frame);
    }
  }
  draw();

  // Dừng sau 4.5 giây dù thế nào
  setTimeout(() => {
    cancelAnimationFrame(frame);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 4500);
}

/* ============================================================
   RESIZE: cập nhật canvas
   ============================================================ */
window.addEventListener("resize", () => {
  const canvas = document.getElementById("confetti-canvas");
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
});
