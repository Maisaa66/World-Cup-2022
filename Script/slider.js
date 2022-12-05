let sliderContainer = document.getElementById("slider-container");
let card = document.querySelector(".card");

// Setting data for card that was created from HTML
card.children[0].firstElementChild.style.backgroundImage = "url(" + bestGoals[0]["img"] + ")";
card.children[0].href = bestGoals[0]["url"];
card.children[0].target = "_blank";
card.children[1].innerText = bestGoals[0]["caption"];

// Creating 5 CLONES from the card and adding data to them
for (let i = 1; i < 6; i++) {
  let newCard = card.cloneNode(true);
  sliderContainer.appendChild(newCard);
  newCard.children[0].href = bestGoals[i]["url"];
  newCard.children[0].target = "_blank";
  newCard.children[0].firstElementChild.style.backgroundImage = "url(" + bestGoals[i]["img"] + ")";
  newCard.children[1].innerText = bestGoals[i]["caption"];
}

let start = 0;
let end = 5;
let count = 6;
let cards = document.querySelectorAll(".card");
// In the beginning we display imgs of indices 0 -> 5 (so, start=0, end=5)
// On pressing RIGHT, we should start from index[6] (from the left)
// On pressing LEFT, we should start from index[13] (from the right)
document.querySelector(".right").addEventListener("click", function () {
  // Setting start with new value to be used incase pressing left (end=5? start=6)
  start = end + 1;
  // Looping over count (No. of imgs that would be changed on One Click)
  for (let i = 0; i < count; i++) {
    // Checking if we reached last element in best goals
    // If end=13 -> that means we will access bestgoals[14]
    // So to make it circular, we set it with -1 (next access will be for index[0])
    if (end == 13) {
      end = -1;
    }
    cards[i].children[0].firstElementChild.style.backgroundImage = "url(" + bestGoals[end + 1]["img"] + ")";
    cards[i].children[0].href = bestGoals[end + 1]["url"];
    cards[i].children[0].target = "_blank";
    cards[i].children[1].innerText = bestGoals[end + 1]["caption"];
    end += 1;
  }
});

document.querySelector(".left").addEventListener("click", function () {
  // Setting end with new value to be used incase pressing right (end=5? start=6)
  end = start - 1;
  // Looping over count (No. of imgs that would be changed on One Click)
  for (let i = count - 1; i >= 0; i--) {
    // Checking if we reached first element in best goals
    // If start=0 -> that means we will access bestgoals[-1]
    // So to make it circular, we set it with 14 (next access will be for index[13])
    if (start == 0) {
      start = 14;
    }
    cards[i].children[0].firstElementChild.style.backgroundImage = "url(" + bestGoals[start - 1]["img"] + ")";
    cards[i].children[0].href = bestGoals[start - 1]["url"];
    cards[i].children[0].target = "_blank";
    cards[i].children[1].innerText = bestGoals[start - 1]["caption"];
    start -= 1;
  }
});
