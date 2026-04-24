window.onload = function () {
  let name = getCookie("name");
  let color = getCookie("color");
  let gender = getCookie("gender");
  let visits = getCookie("visits");

  // avatar
  let img =
    gender === "male"
      ? "https://i.imgur.com/6VBx3io.png"
      : "https://i.imgur.com/3XjF3QK.png";

  document.getElementById("avatar").src = img;

  document.getElementById("welcome").innerHTML =
    `Welcome <span style="color:${color}">${name}</span><br>
      You visited this site ${visits} times`;
};