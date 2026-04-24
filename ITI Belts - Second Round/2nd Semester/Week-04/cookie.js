// Cookie Library
function setCookie(name, value, days) {
  let expires = "";

  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  let cookies = document.cookie.split("; ");

  for (let c of cookies) {
    let [key, value] = c.split("=");
    if (key === name) return value;
  }

  return null;
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Wed, 01 Jun 2005 00:00:00 UTC; path=/;";
}

function hasCookie(name) {
  return getCookie(name) !== null;
}

function allCookieList() {
  return document.cookie.split("; ");
}