

let homeScoreEl = document.getElementById("homescore");
let guestScoreEl = document.getElementById("guestscore");
let homeScore = 0;
let guestScore = 0;


function reset() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}

function increment_home1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function increment_home2() {
    increment_home1()
    increment_home1()
}
function increment_home3() {
    increment_home1()
    increment_home1()
    increment_home1()
}
function increment_guest1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function increment_guest2() {
    increment_guest1()
    increment_guest1()
}
function increment_guest3() {
    increment_guest1()
    increment_guest1()
    increment_guest1()
}