let totalCorrect = 0;
let totalAnswered = 0;
const totalQuestions = document.querySelectorAll(".question").length;

// Fungsi untuk memeriksa jawaban hanya sekali
function checkAnswer(id) {
  const question = document.getElementById(id);
  const options = question.querySelectorAll('input[type="radio"]');
  const feedback = question.querySelector(".feedback");
  const button = question.querySelector("button");

  // Kalau sudah dijawab, stop
  if (question.classList.contains("answered")) return;

  let selected = null;
  options.forEach((option) => {
    if (option.checked) selected = option;
  });

  if (!selected) {
    feedback.textContent = "⚠️ Silakan pilih salah satu jawaban terlebih dahulu.";
    feedback.style.color = "orange";
    feedback.style.marginTop = "16px";
    return;
  }

  // Tandai sudah dijawab
  question.classList.add("answered");
  button.disabled = true;
  options.forEach((option) => option.disabled = true);

  if (selected.value === "correct") {
    feedback.textContent = "✅ Jawaban benar! 🎉";
    feedback.style.color = "green";
    totalCorrect++;
  } else {
    feedback.textContent = "❌ Jawaban salah ☹️";
    feedback.style.color = "red";
  }

  totalAnswered++;

  if (totalAnswered === totalQuestions) {
    showScore();
  }
}

// Tampilkan skor akhir
function showScore() {
  const scoreSection = document.createElement("div");
  scoreSection.style.marginTop = "40px";
  scoreSection.style.padding = "20px";
  scoreSection.style.backgroundColor = "#f8f9fa";
  scoreSection.style.border = "1px solid #ddd";
  scoreSection.style.borderRadius = "8px";
  scoreSection.style.textAlign = "center";

  scoreSection.innerHTML = `
    <h3>Skor Kamu: ${totalCorrect} dari ${totalQuestions}</h3>
    <p>${totalCorrect === totalQuestions ? "🔥 Keren! Kamu jawab semua dengan benar!" : "💡 Tetap semangat belajar UI/UX ya!"}</p>
  `;

  document.querySelector(".questions").appendChild(scoreSection);
}

// Acak soal (Fisher-Yates Shuffle)
document.addEventListener("DOMContentLoaded", function () {
  const questionsContainer = document.querySelector(".questions");
  const questions = Array.from(questionsContainer.children);

  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }

  questions.forEach((q, index) => {
    questionsContainer.appendChild(q);

    const questionText = q.querySelector("p");
    const originalText = questionText.innerHTML;
    const newNumber = index + 1;
    const soalText = originalText.replace(/^\d+\./, newNumber + ".");
    questionText.innerHTML = soalText;
  });
});
