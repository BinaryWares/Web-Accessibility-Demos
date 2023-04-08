function toggleOverlay() {
  const overlay = document.getElementById("overlay");
  if (overlay.style.display === "none" || overlay.style.display === "") {
    overlay.style.display = "block";
    overlay.style.visibility = "visible";
    return;
  }
  overlay.style.display = "none";
  overlay.style.visibility = "hidden";
}

function escapeHandler(e) {
  const ESCAPE_KEY = 27;
  if (e.key === "Escape" || e.keyCode === ESCAPE_KEY) {
    closeModal();
  }
}

function focusHandler(e) {
  const TAB_KEY = 9;
  const focusableElements = this.querySelectorAll(
    "a[href], button, textarea, input[type='text'], input[type='radio'], input[type='checkbox'], select"
  );
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];
  if (e.key === "Tab" || e.keyCode === TAB_KEY) {
    if (e.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        e.preventDefault();
      }
    }
  }
}

function trapKeyboardFocus(modal) {
  modal.addEventListener("keydown", focusHandler);
}

function releaseKeyboardFocus(modal) {
  modal.removeEventListener("keydown", focusHandler);
}

function openModal() {
  toggleOverlay();
  const modal = document.getElementById("modal-dialog");
  modal.style.display = "block";
  modal.style.visibility = "visible";
  trapKeyboardFocus(modal);
  document.addEventListener("keydown", escapeHandler);
}

function closeModal() {
  toggleOverlay();
  const modal = document.getElementById("modal-dialog");
  modal.style.visibility = "hidden";
  modal.style.display = "none";
  releaseKeyboardFocus(modal);
  document.removeEventListener("keydown", escapeHandler);
}
