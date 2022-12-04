
function setStatus(matches) 
{
  let date = new Date("2022/12/1 18:00");

  let month = date.getMonth();
  let day = date.getDate();
  let hour = date.getHours() - 12;

  for (let i = 0; i < 12; i++) {
    let split_date = matches[i]["Date"].split("-"); // ["2", "12" ,"22"]

    let time_split = matches[i]["Time"].split(" "); // ["10:00", "PM"]

    let hour_split = time_split[0].split(":"); // ["10", "00"]

    // split_date[1]    ->   match month
    // split_date[0]    ->   match day

    let in_upcoming_month = split_date[1] - 1 > month;

    let same_month_upcoming_day =
      split_date[1] - 1 == month && split_date[0] > day;

    let today =
      split_date[1] - 1 == month &&
      split_date[0] == day &&
      hour < hour_split[0];

    if (in_upcoming_month || same_month_upcoming_day) {
      matches[i]["Status"] = "Next";
    } else if (today) {
      matches[i]["Status"] = "Today";
    } else {
      matches[i]["Status"] = "Already Played!";
    }
  }
}

function countDown(index) {
  let date = matches[index]["Date"];
  let time = matches[index]["Time"];

  //splitting the date so i can change it from "1-12-22" to "2022-12-1"
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

  // count down logic

  //get the time in mellisec until the date of the match
  let countDownDate = new Date(newDate + " " + hour).getTime();

  // get the time of today
  let now = new Date().getTime(); //set the date to any date

  // get the remaining time or time left from now to the match time
  let remain_Time = countDownDate - now;

  // get the number of days, hours, min and seconds my math calculations
  var days = Math.floor(remain_Time / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (remain_Time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((remain_Time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remain_Time % (1000 * 60)) / 1000);

  //if the time left is 0, it means that we reach the zero hour, so we clear the interval
  if (remain_Time < 0) {
    clearInterval(myCountDownInterval);
    document.getElementById("counter").innerText =
      "The Game Is Starting NOW!!!";
    console.log("HII");
  } else {
    // if there is still time left show it in the page
    document.getElementById("counter").innerText =
      days +
      " Day : " +
      hours +
      " Hour : " +
      minutes +
      " Min: " +
      seconds +
      " Sec";
  }

  console.log(hour, remain_Time);
  console.log(
    "%c" + days + ":" + hours + ":" + minutes + ":" + seconds,
    "font-size:45px"
  );
}

function openMatches() {
  window.open("../Pages/Matches.html", "_blank");
}
