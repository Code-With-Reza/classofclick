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
  2: {
    title: "Frame Tool",
    body: `
            <p>Ketika chevron down diklik, akan muncul pilihan tools:</p>
            <p><strong>Frame (F):</strong> Digunakan untuk membuat artboard atau halaman kerja.</p>
            <p><strong>Section (Shift+S):</strong> Mengelompokkan beberapa frame atau elemen dalam satu area terorganisir di kanvas.</p>
            <p><strong>Slice (S):</strong> Menandai area tertentu agar bisa diekspor sebagai gambar secara terpisah dari desain utama.</p>
        `,
  },
  3: {
    title: "Shape Tool",
    body: `
            <p>Ketika chevron down diklik, akan muncul pilihan tools:</p>
            <p><strong>Rectangle (R), Line (L), Arrow (Shift+L), Ellipse (O):</strong> Membuat bentuk dasar seperti kotak, garis, tanda panah, dan lingkaran.</p>
            <p><strong>Place image:</strong> Memilih satu atau beberapa gambar di komputer dan menyisipkannya di kanvas.</p>
        `,
  },
  4: {
    title: "Pen and Pencil Tool",
    body: `
            <p><strong>Pen (P):</strong> Menggambar bentuk atau garis vektor secara presisi.</p>
            <p><strong>Pencil (Shift+P):</strong> Menggambar bentuk bebas seperti sketsa tangan.</p>
        `,
  },
  5: {
    title: "Text Tool",
    body: `
            <p><strong>Text (T):</strong> Menambahkan teks ke dalam desain.</p>
        `,
  },
  6: {
    title: "Comment Tool",
    body: `
            <p><strong>Comment:</strong> Memberikan feedback langsung di area desain tanpa mengubah elemen apapun.</p>
        `,
  },
  7: {
    title: "Action Menu",
    body: `
            <p><strong>Action:</strong> Mengakses fitur seperti plugin, widget, dan quick actions dengan cepat melalui Command Palette.</p>
        `,
  },
  8: {
    title: "Enter Dev Mode",
    body: `
            <p><strong>Enter Dev Mode (Space):</strong> Beralih ke mode pengembangan.
            Mode khusus untuk developer untuk memeriksa detail desain dengan mudah dan menerjemahkannya menjadi kode.</p>
        `,
  },
};

function openModal(toolNumber) {
  const content = modalContent[toolNumber];
  if (!content) return;
  document.getElementById("modalTitle").innerText = content.title;
  document.getElementById("modalBody").innerHTML = content.body;
  document.getElementById("toolModal").style.display = "block";
}

function closeModal() {
  document.getElementById("toolModal").style.display = "none";
}
