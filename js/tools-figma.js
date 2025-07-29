// Objek berisi konten untuk setiap tool yang akan ditampilkan di dalam modal
const modalContent = {
  1: {
    title: "Move Tool",
    body: `
      <p>Ketika chevron down diklik, akan muncul pilihan tools:</p>
      <p><strong>Move (V):</strong> Memindahkan objek di kanvas.</p>
      <p><strong>Hand (H):</strong> Menggeser tampilan area kerja tanpa memilih objek.</p>
      <p><strong>Scale (K):</strong> Mengubah ukuran objek atau grup objek secara proporsional.</p>
    `,
  },

};

// Fungsi untuk membuka modal berdasarkan nomor tool yang diklik
function openModal(toolNumber) {
  const content = modalContent[toolNumber]; // Ambil konten sesuai nomor tool
  if (!content) return; // Jika tidak ada konten, hentikan fungsi

  // Tampilkan judul dan isi modal sesuai data
  document.getElementById("modalTitle").innerText = content.title;
  document.getElementById("modalBody").innerHTML = content.body;

  // Tampilkan modal
  document.getElementById("toolModal").style.display = "block";
}

// Fungsi untuk menutup modal
function closeModal() {
  document.getElementById("toolModal").style.display = "none";
}
