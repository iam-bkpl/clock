const displayDate = document.querySelector("#display-date");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function setTime() {
  const now = new Date();
  // const d =  new Date.now();
  const year = now.getFullYear();
  const month = months[now.getMonth()];
  const date = now.getDate();
  const day = days[now.getDay()];
  const hours = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const milisecond = now.getMilliseconds();


  const timeEl = document.querySelector("#time");
  const dayEl = document.querySelector("#day");

  timeEl.innerHTML = `${hours %12}:${minute > 10 ? `${minute}`:`0${minute}`}:${second>10?`${second}`:`0${second}`}` ;

  dayEl.innerHTML = `${year}  ${day}  ${month} ${date}`;

}
setTime();
setInterval(setTime,1);

//light mode
const btnEl = document.querySelector('#btn-mode');
const bodyEl = document.querySelector('.light-mode');

btnEl.addEventListener('click',(e)=> {
    if (btnEl.classList.contains('btn-dark')) {
        btnEl.classList.remove('btn-dark');
        btnEl.classList.add('btn-light')
        e.target.innerHTML =  'Light mode';

        //body background
        bodyEl.classList.remove('bg-light');
        bodyEl.classList.add('bg-dark');
        bodyEl.classList.remove('text-dark');
        bodyEl.classList.add('text-white');
        
    } else {
        btnEl.classList.remove('btn-light');
        btnEl.classList.add('btn-dark');
        e.target.innerHTML =  'Dark mode';

        //body
        bodyEl.classList.remove('bg-dark');
        bodyEl.classList.add('bg-light');
        bodyEl.classList.remove('text-white');
        bodyEl.classList.add('text-dark');
        
    }
})
