window.onload = function initialize() {
  btnPressEvent();
  setEater();
};

function btnPressEvent() {
  const startBtn = document.querySelector(".start-btn");
  const stopBtn = document.querySelector(".stop-btn");
  const value = document.querySelector(".value");
  let interval;

  startBtn.addEventListener("click", () => {
    interval = toggleInterval(value, 1000);
  });
  stopBtn.addEventListener("click", () => {
    interval = toggleInterval(value, 100);
  });

  function toggleInterval(element, period) {
    if (!interval) {
        console.log("increment start")
      return setInterval((element) => {
        element.innerHTML = parseInt(element.innerHTML) + 1;
      }, period, element);
    }
    console.log("increment stop")
    clearInterval(interval);
  }
}

function setEater(){
    let txt = document.querySelector(".txt");
    let choices = ["Patte", "Wrda", "Eduardo", "Deelite", "Kiiskifish", "Mirage"]
    console.log(choices)
    
    let index = Math.floor(Math.random() * choices.length)
    console.log(choices)
    console.log(index)
    console.log(choices[index])
    let string = `HOW LONG HAS ${choices[index].toUpperCase()} BEEN EATING FOR`

    txt.innerHTML = string;
}
