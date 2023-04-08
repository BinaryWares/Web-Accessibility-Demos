
function toggleOverlay() {
  const overlay = document.getElementById("overlay");
  if (overlay.getAttribute("aria-hidden") === "true") {
    overlay.style.display = "block";
    overlay.setAttribute("aria-hidden", "false");
    return;
  }
  overlay.style.display = "none";
  overlay.setAttribute("aria-hidden", "true");
}

function openModal() {
  toggleOverlay();
  const modal = document.getElementById("modal-dialog");
  modal.setAttribute("aria-hidden", "false");
  modal.style.display = "block";
  modal.focus();
}

function closeModal() {
  toggleOverlay();
  const modal = document.getElementById("modal-dialog");
  modal.setAttribute("aria-hidden", "true");
  modal.blur();
  modal.style.display = "none";
}
