// Show Alert
const showAlert = document.querySelector("[show-alert]");
if (showAlert) {
  const dataTime = parseInt(showAlert.getAttribute("data-time"));

  const closeAlert = showAlert.querySelector("[close-alert]");

  setTimeout(() => {
    showAlert.classList.add("alert-hidden");
  }, dataTime);

  closeAlert.addEventListener('click', () => {
    showAlert.classList.add("alert-hidden");
  });
}
// End Show Alert