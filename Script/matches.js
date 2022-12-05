// Setting Status for matches
setStatus(matches);

let matchesGroups = document.querySelectorAll(".match__group");
let matchesDates = document.querySelectorAll(".date");

let matchesTeam1 = document.querySelectorAll(".team1");
let matchesTeam2 = document.querySelectorAll(".team2");
let teamNames1 = document.querySelectorAll(".teamName1");
let teamNames2 = document.querySelectorAll(".teamName2");

let matchesStadiums = document.querySelectorAll(".match__stadium");

let matchesTime = document.querySelectorAll(".time");

let nav_latest = document.getElementById("nav-latest");
let nav_today = document.getElementById("nav-today");
let nav_upcoming = document.getElementById("nav-upcoming");

displayMatches("Today");

nav_latest.addEventListener("click", function (event) {
  nav_latest.classList.add("focused-link");
  nav_today.classList.remove("focused-link");
  nav_upcoming.classList.remove("focused-link");
  displayMatches("Latest");
  event.preventDefault();
});

nav_today.addEventListener("click", function (event) {
  nav_latest.classList.remove("focused-link");
  nav_today.classList.add("focused-link");
  nav_upcoming.classList.remove("focused-link");
  displayMatches("Today");
  event.preventDefault();
});

nav_upcoming.addEventListener("click", function (event) {
  nav_latest.classList.remove("focused-link");
  nav_today.classList.remove("focused-link");
  nav_upcoming.classList.add("focused-link");
  displayMatches("Upcoming");
  event.preventDefault();
});

function displayMatches(Status) {
  let match_card_index = 0;
  // setting today's matches data
  for (let i = 0; i < matches.length; i++) {
    if (matches[i]["Status"] == Status) {
      matchesGroups[match_card_index].innerText =
        "Group " + matches[i]["Group"]; // Accessing group

      let team1_name = (teamNames1[match_card_index].innerText =
        matches[i]["TeamA"]); // Accessing Team1 name
      let team2_name = (teamNames2[match_card_index].innerText =
        matches[i]["TeamB"]); // Accessing Team2 name

      matchesStadiums[match_card_index].innerText = matches[i]["Stadium"]; // Accessing Stadium name

      matchesTime[match_card_index].innerText = matches[i]["Time"]; // Accessing Match Time

      matchesTeam1[match_card_index].children[0].src =
        "../Images/flags/" + team1_name + ".png"; // Accessing Team1 flag
      matchesTeam2[match_card_index].children[0].src =
        "../Images/flags/" + team2_name + ".png"; // Accessing Team2 flag

      matchesDates[match_card_index].innerText = matches[i]["Date"];

      match_card_index += 1;
    }
  }
}
