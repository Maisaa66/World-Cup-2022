isLogin();

// Setting Status for matches
setStatus(matches);

let matchesGroups = document.getElementsByClassName("match-group");

let matchesTeam1 = document.getElementsByClassName("match-team1");
let matchesTeam2 = document.getElementsByClassName("match-team2");

let matchesStadiums = document.querySelectorAll(".match-stadium");

let matchesTime = document.querySelectorAll(".match-time");

let daysLeft = document.querySelectorAll(".days");
let hoursLeft = document.querySelectorAll(".hours");
let minutesLeft = document.querySelectorAll(".minutes");
let secondsLeft = document.querySelectorAll(".seconds");

let kickoff = document.getElementsByClassName("kick");
let matchCountDown = document.getElementsByClassName("match-countDown");

let match_card_index = 0;
let todays_matches_indices = [];

// setting today's matches data
for (let i = 0; i < matches.length; i++) {
  if (matches[i]["Status"] == "Today") {
    matchesGroups[match_card_index].innerText = "Group " + matches[i]["Group"]; // Accessing group
    let team1_name = (matchesTeam1[match_card_index].children[1].innerText = matches[i]["TeamA"]); // Accessing Team1 name
    let team2_name = (matchesTeam2[match_card_index].children[1].innerText = matches[i]["TeamB"]); // Accessing Team2 name
    matchesStadiums[match_card_index].innerText = matches[i]["Stadium"]; // Accessing Stadium name
    matchesTime[match_card_index].innerText = matches[i]["Time"]; // Accessing Match Time
    matchesTeam1[match_card_index].children[0].src = "../Images/flags/" + team1_name + ".png"; // Accessing Team1 flag
    matchesTeam2[match_card_index].children[0].src = "../Images/flags/" + team2_name + ".png"; // Accessing Team2 flag

    todays_matches_indices.push(i);
    match_card_index += 1;
  }
}

createCountDown(todays_matches_indices[0], 0);
createCountDown(todays_matches_indices[1], 1);
createCountDown(todays_matches_indices[2], 2);
createCountDown(todays_matches_indices[3], 3);
