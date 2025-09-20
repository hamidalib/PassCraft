const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {
  console.log("login clicked");
  event.preventDefault();
  window.location.href = "main-app/app.html";
});
