document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.ux-btn');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close');

  // Open modal when button is clicked
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
      }
    });
  });

  // Close modal when close button is clicked
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentElement.parentElement.style.display = 'none';
    });
  });
});
