const keys = document.querySelectorAll(".key"),
    hints = document.querySelectorAll(".hints");

function playNote(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        if (!key) return;
        sound.currentTime = 0;
        sound.play();
        key.classList.add("key-klb");
}

function removeTransition(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        key.classList.remove("key-klb");
  }

window.addEventListener("keyup", removeTransition);
window.addEventListener("keydown", playNote);


//expand
let dropdownKlb = document.getElementById("dropdown-klb");
let menuDropdown = document.getElementById("listoption-klb");

function dropdownoptionKlb() {
    if (menuDropdown.style.display === "none") {
        menuDropdown.style.display = "block";
      } else {
        menuDropdown.style.display = "none";
      }
  };
