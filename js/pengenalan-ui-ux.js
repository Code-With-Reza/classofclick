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
let jawabanTerbuka = null;

function tampilJawaban(id) {
    const target = document.getElementById('jawaban-' + id);

    if (jawabanTerbuka === id) {
        target.style.display = 'none';
        jawabanTerbuka = null;
    } else {
        // Sembunyikan semua
        document.querySelectorAll('.jawaban-pair').forEach(div => {
            div.style.display = 'none';
        });

        // Tampilkan yang dipilih, cek khusus untuk kesimpulan
        if (id === 'kesimpulan') {
            target.style.display = 'flex';
        } else {
            target.style.display = 'block';
        }

        jawabanTerbuka = id;
    }
}


