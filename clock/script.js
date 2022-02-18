const secondsElement = document.querySelector('.seconds');
const minutesElement = document.querySelector('.minutes');
const hoursElement = document.querySelector('.hours');

function clock(){
  const time = new Date();

  const hNow = time.getHours();
  const mNow = time.getMinutes();
  const sNow = time.getSeconds();

  const hours = (((hNow / 12) * 360) + 90);
  const minutes = (((mNow / 60) * 360) + 90);
  const seconds = (((sNow / 60) * 360) + 90);

  hoursElement.style.transform = `rotate(${hours}deg)`;
  minutesElement.style.transform = `rotate(${minutes}deg)`;
  secondsElement.style.transform = `rotate(${seconds}deg)`;
}

setInterval(clock, 1000)