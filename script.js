const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

const updateClock = () => {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let ampm = "AM";

  if (hours > 12) {
    hours = hours - 12;
    ampm = "PM";
  }
  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
  secondsElement.innerText = seconds;
  ampmElement.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
};

updateClock();
