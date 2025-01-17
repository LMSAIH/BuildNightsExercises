let currentTime = null;

function init() {
  currentTime = new Date();
}

function addSecond() {
  if (!currentTime) {
    init();
  }

  setInterval(() => {
    currentTime.setSeconds(currentTime.getSeconds() + 1);

    let hours = currentTime.getHours().toString().padStart(2, "0");
    let minutes = currentTime.getMinutes().toString().padStart(2, "0");
    let seconds = currentTime.getSeconds().toString().padStart(2, "0");

    let time = document.querySelector(".time");

    if (time) {
      time.innerHTML = `<span>${hours}</span><span>${minutes}</span><span>${seconds}</span>`;
    }
    
  }, 1000);
}
