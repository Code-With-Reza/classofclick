// Button Pengenalan
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Perbedaan UI dan UX
let jawabanTerbuka = null;

function tampilJawaban(id) {
  const target = document.getElementById("jawaban-" + id);

  if (jawabanTerbuka === id) {
    target.style.display = "none";
    jawabanTerbuka = null;
  } else {
    // Sembunyikan semua
    document.querySelectorAll(".jawaban-pair").forEach((div) => {
      div.style.display = "none";
    });

    // Tampilkan yang dipilih, cek khusus untuk kesimpulan
    if (id === "kesimpulan") {
      target.style.display = "flex";
    } else {
      target.style.display = "block";
    }

    jawabanTerbuka = id;
  }
}
