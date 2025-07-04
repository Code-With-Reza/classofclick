// Button Pengenalan
const btnUI = document.getElementById('btnUI');
const btnUX = document.getElementById('btnUX');
const uiPanel = document.getElementById('uiPanel');
const uxPanel = document.getElementById('uxPanel');

btnUI.addEventListener('click', () => {
    uiPanel.classList.toggle('show');
});

btnUX.addEventListener('click', () => {
    uxPanel.classList.toggle('show');
});

function closePanel(id) {
    document.getElementById(id).classList.remove('show');
}

// Perbedaan UI dan UX
let jawabanTerbuka = null; // menyimpan ID yang sedang terbuka

function tampilJawaban(id) {
    const target = document.getElementById('jawaban-' + id);

    if (jawabanTerbuka === id) {
        // Kalau tombol yang sama diklik lagi → sembunyikan
        target.style.display = 'none';
        jawabanTerbuka = null;
    } else {
        // Sembunyikan semua dulu
        document.querySelectorAll('.jawaban-pair').forEach(div => {
            div.style.display = 'none';
        });

        // Tampilkan yang dipilih
        target.style.display = 'block';
        jawabanTerbuka = id;
    }
}
