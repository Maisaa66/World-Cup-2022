let signinForm = document.getElementById("sign-in-form");
let expDays = 7;

signinForm.addEventListener("submit", function (e) {
  let email = getCookie("email");
  let password = getCookie("password");
  let curEmail = e.target["email"].value;
  let curPass = e.target["password"].value;
  
  // Sign in Validation
  if (curEmail === email && password === curPass) {
    setCookie("isLogin", true, 7);
    location.replace("../Pages/Home.html");
  } else {
    alert('Email or Password is not valid!')
  }
  e.preventDefault();
});
