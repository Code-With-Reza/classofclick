// Fungsi untuk memeriksa jawaban
function checkAnswer(id) {
  const question = document.getElementById(id);
  const options = question.querySelectorAll('input[type="radio"]');
  const feedback = question.querySelector(".feedback");

  let selected = null;
  options.forEach((option) => {
    if (option.checked) selected = option;
  });

  if (!selected) {
    feedback.textContent = "⚠️ Silakan pilih salah satu jawaban terlebih dahulu.";
    feedback.style.color = "orange";
    feedback.style.marginTop = "16px";
  } else if (selected.value === "correct") {
    feedback.textContent = "✅ Jawaban benar! 🎉";
    feedback.style.color = "green";
    feedback.style.marginTop = "16px";
  } else {
    feedback.textContent = "❌ Jawaban salah. Coba lagi ya!";
    feedback.style.color = "red";
    feedback.style.marginTop = "16px";
  }
}

// Ambil container soal dan arraykan anak-anaknya
const questionsContainer = document.querySelector(".questions");
const questions = Array.from(questionsContainer.children);

// Acak array menggunakan Fisher-Yates Shuffle
for (let i = questions.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [questions[i], questions[j]] = [questions[j], questions[i]];
}

// Render ulang dan update nomor soal
questions.forEach((q, index) => {
  questionsContainer.appendChild(q); // Pindahkan elemen yang sudah diacak

  // Temukan <p> di dalam div.question untuk update nomornya
  const questionText = q.querySelector("p");
  const originalText = questionText.innerHTML;

  // Cari posisi titik setelah nomor dan ambil teks selanjutnya
  const newNumber = index + 1;
  const soalText = originalText.replace(/^\d+\./, newNumber + ".");
  questionText.innerHTML = soalText;
});
