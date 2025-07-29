document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".ux-btn");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  // Buka modal saat tombol diklik
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "block";
      }
    });
  });

  // Tutup modal saat tombol tutup diklik
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.parentElement.style.display = "none";
    });
  });
});
