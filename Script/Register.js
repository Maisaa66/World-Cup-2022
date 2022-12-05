let regForm = document.getElementById("register-form");
let expDays = 7;

regForm.addEventListener('submit', function (e) {
  setCookie("fname", e.target["fname"].value, expDays);
  setCookie("lname", e.target["lname"].value, expDays);
  setCookie("email", e.target["email"].value, expDays);
  setCookie("password", e.target["password"].value, expDays);
  setCookie("phone", e.target["phone"].value, expDays);
  setCookie("gender", e.target["gender"].value, expDays);
  setCookie("isLogin", true, expDays);
})