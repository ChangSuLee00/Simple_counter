const start = document.querySelector(".start-box");
const lap = document.querySelector(".lap-box");
const stop = document.querySelector(".stop-box");
const reset = document.querySelector(".reset-box");
const lapRecord = document.querySelector(".lap-record");

const timer = document.querySelector(".timer");
const time = {
  sec: 0,
  min: 0,
};
clicked = false;
stopped = false;

function timeStart() {
  if (clicked === false) {
    setInterval(function () {
      if (stopped !== true) {
        time.sec++;

        time.sec = String(time.sec).padStart(2, "0");
        time.min = String(time.min).padStart(2, "0");

        timer.innerText = `${time.min}:${time.sec}`;

        if (time.sec === "60") {
          time.sec = 0;
          time.min++;
        }
      }
    }, 100);
  }
  clicked = true;
  stopped = false;
}

start.addEventListener("click", timeStart);

function timeLap() {
  lapRecord.innerText = `${time.min}:${time.sec}`;
}

lap.addEventListener("click", timeLap);

function timeStop() {
  stopped = true;
}

stop.addEventListener("click", timeStop);

function timeReset() {
  stopped = true;
  time.sec = 0;
  time.min = 0;
  time.sec = String(time.sec).padStart(2, "0");
  time.min = String(time.min).padStart(2, "0");
  timer.innerText = `${time.min}:${time.sec}`;
  lapRecord.innerText = ``;
}

reset.addEventListener("click", timeReset);
