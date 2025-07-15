const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const secretCodeInput = document.getElementById("secret-code");
const errorMsg = document.getElementById("error-msg");

const levelData = {
  easy: {
    title: "Easy Level",
    desc: "Di level ini kamu diminta untuk menjawab 15 soal berupa Pilihan Ganda (PG).",
    code: "E20251",
    url: "easy-level.html",
  },
  medium: {
    title: "Medium Level",
    desc: `Di level ini kamu diminta untuk menjawab 20 soal campuran berupa: Pilihan Ganda (PG), Pertanyaan singkat, dan OX Jawaban.
\n Namun, sebelum memulai menjawab soal, kamu diharapkan untuk mengganti nama dengan Nama Lengkap. Kamu dapat mengaturnya dengan mengklik bagian profile (sebelah kanan atas).`,
    code: "M20252",
    url: "https://quiz.zep.us/id/play/pnmxXg",
  },
  hard: {
    title: "Hard Level",
    desc: "Sebelum memasuki level ini, diharapkan sudah membentuk kelompok kecil sebanyak 3-4 orang. Karena di level ini kalian diminta untuk menyelesaikan mini studi kasus",
    code: "H20253",
    url: "https://forms.gle/e5FfzX8wYRGTxqTa8",
  },
};

function openModal(level) {
  modal.style.display = "flex";
  secretCodeInput.value = "";
  errorMsg.textContent = "";

  modalTitle.textContent = levelData[level].title;
  modalDesc.innerHTML = levelData[level].desc.replace(/\n/g, "<br>");
  secretCodeInput.focus();
  secretCodeInput.dataset.level = level;
}

function closeModal() {
  modal.style.display = "none";
}

function submitCode() {
  const level = secretCodeInput.dataset.level;
  const enteredCode = secretCodeInput.value.trim();

  if (enteredCode === levelData[level].code) {
    window.location.href = levelData[level].url;
  } else {
    errorMsg.textContent = "Kode rahasia salah. Coba lagi ya!";
  }
}

// Tutup modal kalau klik di luar konten
window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};
