let matches = [];

for (let i = 0; i < 12; i++) {
  matches[i] = [];
}

// ----------------------------------------------------  matches data

matches[0]["TeamA"] = "Denmark";
matches[0]["TeamB"] = "Australia";
matches[0]["Date"] = "30-11-22";
matches[0]["Time"] = "6:00 PM";
matches[0]["Stadium"] = "Al Janoub Stadium";
matches[0]["Group"] = "D";

matches[1]["TeamA"] = "Tunisia";
matches[1]["TeamB"] = "France";
matches[1]["Date"] = "30-11-22";
matches[1]["Time"] = "6:00 PM";
matches[1]["Stadium"] = "Education City Stadium";
matches[1]["Group"] = "D";

matches[2]["TeamA"] = "Poland";
matches[2]["TeamB"] = "Argentina";
matches[2]["Date"] = "30-11-22";
matches[2]["Time"] = "10:00 PM";
matches[2]["Stadium"] = "Stadium 974";
matches[2]["Group"] = "C";

matches[3]["TeamA"] = "Saudi Arabia";
matches[3]["TeamB"] = "Mexico";
matches[3]["Date"] = "30-11-22";
matches[3]["Time"] = "10:00 PM";
matches[3]["Stadium"] = "Lusail Stadium";
matches[3]["Group"] = "C";

matches[4]["TeamA"] = "Croatia";
matches[4]["TeamB"] = "Belgium";
matches[4]["Date"] = "1-12-22";
matches[4]["Time"] = "6:00 PM";
matches[4]["Stadium"] = "Ahmad Bin Ali Stadium";
matches[4]["Group"] = "F";

matches[5]["TeamA"] = "Canada";
matches[5]["TeamB"] = "Morocco";
matches[5]["Date"] = "1-12-22";
matches[5]["Time"] = "6:00 PM";
matches[5]["Stadium"] = "Al Thumama Stadium";
matches[5]["Group"] = "F";

matches[6]["TeamA"] = "Japan";
matches[6]["TeamB"] = "Spain";
matches[6]["Date"] = "1-12-22";
matches[6]["Time"] = "10:00 PM";
matches[6]["Stadium"] = "Khalifa International Stadium";
matches[6]["Group"] = "E";

matches[7]["TeamA"] = "Costa Rica";
matches[7]["TeamB"] = "Germany";
matches[7]["Date"] = "1-12-22";
matches[7]["Time"] = "10:00 PM";
matches[7]["Stadium"] = "Al Bayt Stadium";
matches[7]["Group"] = "E";

matches[8]["TeamA"] = "Ghana";
matches[8]["TeamB"] = "Uruguay";
matches[8]["Date"] = "2-12-22";
matches[8]["Time"] = "6:00 PM";
matches[8]["Stadium"] = "Al Janoub Stadium";
matches[8]["Group"] = "H";

matches[9]["TeamA"] = "South Korea";
matches[9]["TeamB"] = "Portugal";
matches[9]["Date"] = "2-12-22";
matches[9]["Time"] = "6:00 PM";
matches[9]["Stadium"] = "Education City Stadium";
matches[9]["Group"] = "H";

matches[10]["TeamA"] = "Serbia";
matches[10]["TeamB"] = "Switzerland";
matches[10]["Date"] = "2-12-22";
matches[10]["Time"] = "10:00 PM";
matches[10]["Stadium"] = "Stadium 974";
matches[10]["Group"] = "G";

matches[11]["TeamA"] = "Brazil";
matches[11]["TeamB"] = "Cameroon";
matches[11]["Date"] = "2-12-22";
matches[11]["Time"] = "10:00 PM";
matches[11]["Stadium"] = "Lusail Stadium";
matches[11]["Group"] = "G";

// ----------------------------------------------------  matches data

// console.log(matches);

var date = new Date();

var month = date.getMonth();
var day = date.getDate();
var hour = date.getHours() - 12;

// console.log(month);
// console.log(day);
// console.log(hour);

for(let i = 0; i < 12; i++)
{
  let split_date = matches[i]["Date"].split("-");    // ["2", "12" ,"22"]

  let time_split = matches[i]["Time"].split(" ");    // ["10:00", "PM"]
  let hour_split = time_split[0].split(":");            // ["10", "00"]

  // split_date[1]    ->   match month
  // split_date[0]    ->   match day

  console.log(matches[i]["TeamA"] + " vs " +  matches[i]["TeamB"]  + "    " + split_date + "    " + matches[i]["Time"]);

  let in_upcoming_month = (split_date[1]-1 > month);

  let same_month_upcoming_day = (split_date[1]-1 == month) && (split_date[0] > day); 

  let today = (split_date[1]-1 == month) && (split_date[0] == day) && (hour < hour_split[0]);

  if(in_upcoming_month || same_month_upcoming_day)
    console.log("next!");

  else if(today)
    console.log("today!");

  else
    console.log("already played!");
}
