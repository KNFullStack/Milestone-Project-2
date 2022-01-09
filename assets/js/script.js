// General Gameplay.
let pairArray = [];
let pairsFound = [];
let score = 0;
let cardIcons = document.getElementsByTagName("i");
let cards = document.getElementsByClassName("card");
window.onload = playGame();

function playGame() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function (event) {
            this.children[0].style.display = "inline-block";
            pairArray.push(event);
            if (pairArray.length === 2) {
                if (pairArray[0].target.id === pairArray[1].target.id) {
                    decrementScore();
                    pairArray = [];
                    return
                } else {
                    matchingPair();
                    return
                }
            } else if (pairArray.length === 3) {
                pairArray = [];
                return
            }
            return
        });
    }
    for (let i = 0; i < cardIcons.length; i++) {
        cardIcons[i].style.display = "none";
    }
    randomOrder();
    return
}

// Changes the order of the cards on the game board.
function randomOrder() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.order = Math.floor(Math.random() * 20) + 1;
    }
    return
}

// Checks whether the 2 clicked cards are a match.
function matchingPair() {
    let clickOne = pairArray[0].target.getAttribute("data-card-pair");
    let clickTwo = pairArray[1].target.getAttribute("data-card-pair");
    if (clickOne === clickTwo) {
        incrementScore();
        stopFurtherClicks();
        pairsFound.push(...pairArray);
        checkForWin();
        pairArray = [];
    } else if (clickOne !== clickTwo) {
        decrementScore();
        difficultyChecker();
        pairArray = [];
    }
    return
}

// Checks if all 10 pairs are found.
let lastScore = document.getElementById("lastScore");

function checkForWin() {
    if (pairsFound.length === 20) {
        lastScore.innerHTML = score;
        winner.classList.remove("hide");
    }
    return
}

// Stops a pair being clicked once a match is found.
function stopFurtherClicks() {
    for (let i = 0; i < pairArray.length; i++) {
        let cardId = pairArray[i].target.id;
        let card = document.getElementById(`${cardId}`)
        card.classList.add("unclickable")
    }
    return
}

// Adds 3 points to the total score.
function incrementScore() {
    let currentScore = document.getElementById("currentScore");
    currentScore.innerHTML = score += 3;
    return
}

// Removes 0.5 points for an incorrect guess, or clicking the same card twice.
function decrementScore() {
    currentScore.innerHTML = score -= 0.5;
    return
}

// Restart Game Parameters.
let restart = document.getElementById("restartButton");
restart.addEventListener("click", restartGame)

function restartGame() {
    pairArray = [];
    pairsFound = [];
    score = 0;
    currentScore.innerHTML = 0;
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("unclickable");
    }
    for (let i = 0; i < cardIcons.length; i++) {
        cardIcons[i].style.display = "none";
    }
    randomOrder();
    hiScoresContainer.classList.add("hide");
    return
}

// Difficulty Settings & Changes
let normal = true;
let hard = false;
let insane = false;
const difficultyNormal = document.getElementById("normal");
const difficultyHard = document.getElementById("hard");
const difficultyInsane = document.getElementById("insane");
difficultyNormal.addEventListener("click", () => {
    normal = true;
    hard = false;
    insane = false;
    return
})
difficultyHard.addEventListener("click", () => {
    normal = false;
    hard = true;
    insane = false;
    return
})
difficultyInsane.addEventListener("click", () => {
    normal = false;
    hard = false;
    insane = true;
    return
})

let duration;

function difficultyChecker() {
    if (normal) {
        duration = 300;
        durations();
        mouseHoverFunction();
        return
    } else if (hard) {
        duration = 100;
        durations();
        mouseHoverFunction();
        return
    } else if (insane) {
        duration = 1;
        durations();
        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener("mouseover", function () {
                this.style.backgroundColor = "white";
            });
            cards[i].addEventListener("mouseleave", function () {
                this.style.backgroundColor = "rgb(26, 24, 24)";
            });
        }
        return
    }

    function durations() {
        for (let i = 0; i < pairArray.length; i++) {
            let cardId = pairArray[i].target.id;
            let card = document.getElementById(`${cardId}`).getElementsByTagName("i");
            card[0].classList.add("fade");
            setTimeout(() => {
                card[0].style.display = "none";
            }, `${duration}`)
            card[0].classList.remove("fade");
        }
        return
    }

    function mouseHoverFunction() {
        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener("mouseover", function () {
                this.style.backgroundColor = "black";
            });
            cards[i].addEventListener("mouseleave", function () {
                this.style.backgroundColor = "rgb(26, 24, 24)";
            });
        }
        return
    }
    return
}

// Dialogue Box Hide/Show
let game = document.getElementById("gamepage");
let home = document.getElementById("homepage");
let contactBox = document.getElementById("contactFormBox");
let homeBox = document.getElementById("homepageBox");
let hiScoresContainer = document.getElementById("hiScoresContainer");
let play = document.getElementById("playButton");

play.addEventListener("click", () => {
    home.classList.add("hide");
    game.classList.remove("hide");
    difficultyChecker();
    return
})

let contact = document.getElementById("contactButton");
contact.addEventListener("click", () => {
    homeBox.classList.add("hide");
    contactBox.classList.remove("hide");
    return
})

let back = document.getElementById("backButton");
back.addEventListener("click", () => {
    homeBox.classList.remove("hide");
    contactBox.classList.add("hide");
    successText.classList.add("hide");
    return
})

let quit = document.getElementById("quitButton");
quit.addEventListener("click", () => {
    restartGame();
    hiScoresContainer.classList.add("hide");
    home.classList.remove("hide");
    game.classList.add("hide");
    return
})

let hiScores = document.getElementById("hiScoreButton");
hiScores.addEventListener("click", () => {
    hiScoresContainer.classList.remove("hide");
    return
})

let closeHiScores = document.getElementById("closeHiScores");
closeHiScores.addEventListener("click", () => {
    hiScoresContainer.classList.add("hide");
    return
})

let restartGamePostWin = document.getElementById("restartGamePostWin");
restartGamePostWin.addEventListener("click", () => {
    restartGame();
    winner.classList.add("hide");
    return
})

let returnHome = document.getElementById("returnHome");
returnHome.addEventListener("click", () => {
    home.classList.remove("hide");
    game.classList.add("hide");
    winner.classList.add("hide");
    restartGame();
    return
})

// EmailJS Functionality

function sendMail(contactForm) {
    emailjs.send("service_xvli6vx", "template_8fqwdtw", {
            "from_name": contactForm.fullName.value,
            "from_email": contactForm.email.value,
            "to_name": "Kingsley",
            "message": contactForm.message.value,
        })
        .then((response) => {
                console.log("success", response);
                displaySuccess();
            },
            (error) => {
                console.log("Error", error);
            });

    return false;
}

let successText = document.getElementById("displaySuccess");

function displaySuccess() {
    successText.classList.remove("hide");
}

// Star Canvas Background
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min, max) {
    return min + Math.random() * (max + 1 - min);
}

function stars() {
    const canvasSize = canvas.width * canvas.height;
    const starsFraction = canvasSize / 2000;
    for (let i = 0; i < starsFraction; i++) {
        let xPosition = random(2, canvas.width - 2);
        let yPosition = random(2, canvas.height - 2);
        let alpha = random(0.5, 1);
        let size = random(1, 2);
        context.fillStyle = "#ffffff";
        context.globalAlpha = alpha;
        context.fillRect(xPosition, yPosition, size, size);
    }
}

stars();

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars();
})


// to do list:
// Input field for username at the end to save their score. Use localStorage to save values.
//      username field added, now reference and use it. 
// SEO things in <head>