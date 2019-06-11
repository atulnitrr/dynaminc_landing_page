const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");

//show time

const showAmPm = true;

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  const amPM = hour >= 12 ? "PM" : "AM";

  // 12 hour format
  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPM : ""} `;

  setTimeout(showTime, 1000);
}

function setBack() {
  let today = new Date(),
    hour = today.getHours();

  if (hour <= 12) {
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour <= 18) {
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = "Good AfterNoon";
  } else {
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = "Good Evening";
  }
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter a name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

function setFocus(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

showTime();
setBack();
getName();
getFocus();
