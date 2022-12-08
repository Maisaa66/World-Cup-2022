setStatus(matches);
isLogin();

let plus_buttons = document.querySelectorAll(".ticket-plus");
let minus_buttons = document.querySelectorAll(".ticket-minus");

let tickets_counters = document.querySelectorAll(".ticketCount");

for (let i = 0; i < plus_buttons.length; i++) {
  plus_buttons[i].addEventListener("click", function () {
    if (tickets_counters[i].value >= 5) {
      alert("You can book max 5 tickets");
      tickets_counters[i].value = 5;
    } else {
      tickets_counters[i].value++;
    }
  });
}

for (let i = 0; i < minus_buttons.length; i++) {
  minus_buttons[i].addEventListener("click", function () {
    if (tickets_counters[i].value <= 0) {
      tickets_counters[i].value = 0;
    } else {
      tickets_counters[i].value--;
    }
  });
}

let matchesGroups = document.querySelectorAll(".match__group");
let matchesDates = document.querySelectorAll(".date");

let matchesTeam1 = document.querySelectorAll(".team1");
let matchesTeam2 = document.querySelectorAll(".team2");
let teamNames1 = document.querySelectorAll(".teamName1");
let teamNames2 = document.querySelectorAll(".teamName2");
let matchesStadiums = document.querySelectorAll(".match__stadium");
let matchesTime = document.querySelectorAll(".time");

function displayMatches(Status) {
  let match_card_index = 0;
  // setting today's matches data
  for (let i = 0; i < matches.length; i++) {
    if (matches[i]["Status"] == Status) {
      matchesGroups[match_card_index].innerText = "Group " + matches[i]["Group"]; // Accessing group
      let team1_name = (teamNames1[match_card_index].innerText = matches[i]["TeamA"]); // Accessing Team1 name
      let team2_name = (teamNames2[match_card_index].innerText = matches[i]["TeamB"]); // Accessing Team2 name
      matchesStadiums[match_card_index].innerText = matches[i]["Stadium"]; // Accessing Stadium name
      matchesTime[match_card_index].innerText = matches[i]["Time"]; // Accessing Match Time
      matchesTeam1[match_card_index].children[0].src = "../Images/flags/" + team1_name + ".png"; // Accessing Team1 flag
      matchesTeam2[match_card_index].children[0].src = "../Images/flags/" + team2_name + ".png"; // Accessing Team2 flag
      matchesDates[match_card_index].innerText = matches[i]["Date"];
      match_card_index += 1;
    }
  }
}

displayMatches("Upcoming");

let match_row = document.querySelector(".matchRow");
let match_table = document.querySelector("#prevBooked-table");
let prices = document.querySelectorAll(".price");
let num_rows_created = 1;

// looping on cards (matches)
for (let i = 0; i < 4; i++) {
  if (hasCookie(i.toString())) {
    let tickets_num = getCookie(i.toString());

    let row_clone = match_row.cloneNode(true);
    match_table.appendChild(row_clone);

    let booked_team1_divs = document.querySelectorAll(".booked-team1");
    let booked_team2_divs = document.querySelectorAll(".booked-team2");

    let booked_team1_names = document.querySelectorAll(".booked-teamName1");
    let booked_team2_names = document.querySelectorAll(".booked-teamName2");

    let booked_matches_groups = document.querySelectorAll(".booked-match__group");

    let booked_matches_dates = document.querySelectorAll(".booked-date");
    let booked_matches_time = document.querySelectorAll(".booked-time");

    let booked_matches_stadiums = document.querySelectorAll(".booked-match__stadium");
    let booked_matches_tickets = document.querySelectorAll(".booked-Tickets-Num");

    let calculated_prices = document.querySelectorAll(".calculated-price");

    // inserting teams flags
    booked_team1_divs[num_rows_created].firstElementChild.src = matchesTeam1[i].children[0].src;
    booked_team2_divs[num_rows_created].firstElementChild.src = matchesTeam2[i].children[0].src;

    // inserting teams names
    booked_team1_names[num_rows_created].innerText = teamNames1[i].innerText;
    booked_team2_names[num_rows_created].innerText = teamNames2[i].innerText;

    // inserting matches groups
    booked_matches_groups[num_rows_created].innerText = matchesGroups[i].innerText;

    // inserting matches dates
    booked_matches_dates[num_rows_created].innerText = matchesDates[i].innerText;

    // inserting matches times
    booked_matches_time[num_rows_created].innerText = matchesTime[i].innerText;

    // inserting matches stadiums
    booked_matches_stadiums[num_rows_created].innerText = matchesStadiums[i].innerText;

    // inserting matches tickets
    booked_matches_tickets[num_rows_created].innerText = tickets_num;

    // inserting calculated prices
    console.log(prices[i].innerText.split("$")[1]);
    calculated_prices[num_rows_created].innerText = "$" + (parseInt(prices[i].innerText.split("$")[1]) * parseInt(tickets_num)).toString();

    num_rows_created++;
  }
}

match_row.style.display = "none";

let book_buttons = document.querySelectorAll(".book-button");

for (let i = 0; i < book_buttons.length; i++) {
  book_buttons[i].firstElementChild.addEventListener("click", function () {
    if (hasCookie("isLogin")) {
      setCookie(i, tickets_counters[i].value, 7);
      location.replace("../Pages/Booking.html");
    } else {
      alert("Please sign in first");
    }
  });
}

if (!hasCookie("isLogin")) {
  // not logged in -> hide booked matches section
  document.getElementById("prevBooked").innerHTML = "<h3>Please Sign in First</h3>";
} else {
  // check whether the user booked matches before or not
  let booked_matches_counter = 0;

  for (let i = 0; i < 4; i++) {
    if (hasCookie(i.toString())) booked_matches_counter++;
  }
  if (booked_matches_counter == 0) document.getElementById("prevBooked").innerHTML = "<h3>No Booked Matches</h3>";
}
