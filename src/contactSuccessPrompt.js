// Closing success popup
// Fisrt, scroll to the top
window.scrollTo(0, 0);

const popup = document.querySelector(".contactConfirmation");
const popupWindow = popup.querySelector("div");
const popupBtn = popup.querySelector(".btn");
// If contact creation was successful
// Stop scrolling
document.body.style.overflowY = "hidden";
// Close popup if clicked outside the window
popup.addEventListener("click", () => {
  // eslint-disable-next-line no-restricted-globals
  if (!popupWindow.contains(event.target)) {
    popup.style.display = "none";
    document.body.style.overflowY = "auto";
  }
});
// Close popup if clicked on the button
popupBtn.addEventListener("click", () => {
  popup.style.display = "none";
  document.body.style.overflowY = "auto";
});
