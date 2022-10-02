window.onload = function initialize() {
  btnPressEvent();
  setEater();
};

function btnPressEvent() {
  const toggleTimerBtn = document.querySelector(".toggle-timer-btn");
  const value = document.querySelector(".value");
  const musicPlayer = document.querySelector(".music-player audio");
  let interval;
  let testvar = 0
  toggleTimerBtn.addEventListener("click", () => {
    interval = toggleInterval(value, 100);
  });

  function toggleInterval(element, period) {
    if (!interval) {
      console.log("increment start");
      toggleTimerBtn.innerHTML = "STOP";
      return setInterval(
        (element) => {
          element.innerHTML = (parseFloat(element.innerHTML) + 0.1).toFixed(1)
        },
        period, 
        element
      );
    }
    console.log("increment stop");
    toggleTimerBtn.innerHTML = "START";
    clearInterval(interval);
  }
}

function setEater() {
  let txt = document.querySelector(".txt");
  let choices = ["Patte", "Wrda", "Eduardo", "Deelite", "Kiiskifish", "Mirage"];
  console.log(choices);

  let index = Math.floor(Math.random() * choices.length);
  console.log(choices);
  console.log(index);
  console.log(choices[index]);
  let string = `HOW LONG HAS ${choices[index].toUpperCase()} BEEN EATING FOR`;

  txt.innerHTML = string;
}
