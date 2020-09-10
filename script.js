let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let value3 = document.getElementById('value3');

let btnSpin = $("#btnSpin");
let values = ['🤭', '🥶', '💩', '👻', '👽', '👾', '🤖', '😈', '💎'];

let inpSpeed = document.getElementById("inpSpeed");




let animationId;

function updatAnimation(newSpeed) {

  if (animationId) {
    clearInterval(animationId)
  }

  animationId = setInterval(() => {

    value1.innerText = getRandomValue();
    value2.innerText = getRandomValue();
    value3.innerText = getRandomValue();

  },
    1000 / newSpeed)


}
function getRandomValue() {
  return values[Math.floor(Math.random() * 8)];
};


inpSpeed.onchange = function (ev) {
  //  console.log(ev.target.value);
  console.log(inpSpeed.value);
  //1s /var(--speed)

  ///directely passing the value
  document.documentElement.style.setProperty('--speed', 1 / ev.target.value);  //updating css property using javascript 
  updatAnimation(ev.target.value);
}

btnSpin.click(() => {
  document.documentElement.style.setProperty('--speed', 1 / 4);
  setTimeout(function () {
    document.documentElement.style.setProperty('--speed', 1 / 5);

  },1000);

  setTimeout(function () {
    document.documentElement.style.setProperty('--speed', 1 / 8);

  },2000);
  setTimeout(function () {
    document.documentElement.style.setProperty('--speed', 1 / 1);

  },5000);
  setTimeout(stopSpin,6000);
})
function stopSpin(){
  clearInterval(animationId)
  document.documentElement.style.setProperty('--speed', 0);
  if (value1.innerText == value2.innerText) {
    if (value2.innerText == value3.innerText) {
      console.log("winner");
      alert("you Won!!")
      console.log(value1.innerText, value2.innerText, value3.innerText)
    }
  }

}


