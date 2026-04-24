// Registration
function register() {
  let name = document.getElementById("username").value;
  let color = document.getElementById("color").value;
  let gender = document.getElementById("gender").value;

  // Save cookies
  setCookie("name", name, 7);
  setCookie("color", color, 7);
  setCookie("gender", gender, 7);

  // visits
  if (hasCookie("visits")) {
    let v = parseInt(getCookie("visits"));
    setCookie("visits", v + 1, 7);
  } else {
    setCookie("visits", 1, 7);
  }

  // redirect
  location.href = "profile.html";
}