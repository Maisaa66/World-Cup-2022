// Get the time of today
let now = new Date("2022/12/1 17:59").getTime(); //set the date to any date

function setStatus(matches) {
  let date = new Date("2022/12/1 18:00");
  let month = date.getMonth();
  let day = date.getDate();

  for (let i = 0; i < 12; i++) {
    let split_date = matches[i]["Date"].split("-"); // ["2", "12" ,"22"]

    // split_date[1]    ->   match month
    // split_date[0]    ->   match day
    let in_upcoming_month = split_date[1] - 1 > month;
    let same_month_upcoming_day = split_date[1] - 1 == month && split_date[0] > day;
    let today = split_date[1] - 1 == month && split_date[0] == day;

    if (in_upcoming_month || same_month_upcoming_day) {
      matches[i]["Status"] = "Upcoming";
    } else if (today) {
      matches[i]["Status"] = "Today";
    } else {
      matches[i]["Status"] = "Latest";
    }
  }
}

// Increase time by one second
setInterval(function () {
  now += 1000;
}, 1000);

function openMatches() {
  window.open("../Pages/Matches.html", "_blank");
}

function createCountDown(index, card_index) {
  let date = matches[index]["Date"];
  let time = matches[index]["Time"];

  // splitting the date so i can change it from "1-12-22" to "2022-12-1"
  let splitDate = date.split("-");
  let newDate = "20" + splitDate[2] + "-" + splitDate[1] + "-" + splitDate[0];

  // splitting the time so i can change it to 24 formate by checking it PM or AM
  let split_time = time.split(" ");
  let hour_min = split_time[0].split(":");
  let hour = hour_min[0];
  let min = hour_min[1];
  let timeFormat = split_time[1];

  if (timeFormat == "PM" && parseInt(hour) < 12) {
    hour = parseInt(hour) + 12 + ":" + min; //hour and min in 24 formate
  } else {
    hour = hour + ":" + min;
  }

  let countDownInterval = setInterval(function () {
    // get the time in mellisec until the date of the match
    let countDownDate = new Date(newDate + " " + hour).getTime();

    // get the remaining time or time left from now to the match time
    let remain_Time = countDownDate - now;

    // get the number of days, hours, min and seconds my math calculations
    var days = Math.floor(remain_Time / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remain_Time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remain_Time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remain_Time % (1000 * 60)) / 1000);

    daysLeft[card_index].innerText = days + " days";
    hoursLeft[card_index].innerText = hours + " hours";
    minutesLeft[card_index].innerText = minutes + " minutes";
    secondsLeft[card_index].innerText = seconds + " seconds";

    // if the time left is 0, it means that we reach the zero hour, so we clear the interval
    if (remain_Time < 0) {
      clearInterval(countDownInterval);
      matchCountDown[card_index].innerHTML = "● Live Now";
      matchCountDown[card_index].style.color = "red";
      kickoff[card_index].innerHTML = "";
    }
  }, 1000);
}

// Sign in section Validation
function isLogin() {
  if (hasCookie("isLogin")) {
    let signin = document.getElementById("signin");
    signin.innerText = "Log out";
    signin.addEventListener("click", function (e) {
      deleteCookie("isLogin");
      location.replace("../Pages/Home.html");
      e.preventDefault();
    });
  }
}
