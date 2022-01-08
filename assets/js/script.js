let pairArray = [];
let pairsFound = [];
let score = 0;
let game = document.getElementById("gamepage");
let home = document.getElementById("homepage");
let winner = document.getElementById("winner");
let play = document.getElementById("playButton");
let hiScores = document.getElementById("hiScoreButton");
let contact = document.getElementById("contactButton");
let contactBox = document.getElementById("contactFormBox");
let homeBox = document.getElementById("homepageBox");
let back = document.getElementById("backButton");
let restart = document.getElementById("restartButton");
let quit = document.getElementById("quitButton");
const difficultyNormal = document.getElementById("normal");
const difficultyHard = document.getElementById("hard");
const difficultyInsane = document.getElementById("insane");
let normal = true;
let hard = false;
let insane = false;
let duration;
let returnHome = document.getElementById("returnHome");
let lastScore = document.getElementById("lastScore");
let restartGamePostWin = document.getElementById("restartGamePostWin");
let closeHiScores = document.getElementById("closeHiScores");
let hiScoresContainer = document.getElementById("hiScoresContainer");

window.onload = playGame();

hiScores.addEventListener("click", () => {
    hiScoresContainer.classList.remove("hide");
    return
})

closeHiScores.addEventListener("click", () => {
    hiScoresContainer.classList.add("hide");
    return
})

restartGamePostWin.addEventListener("click", () => {
    restartGame();
    winner.classList.add("hide");
    return
})

returnHome.addEventListener("click", () => {
    home.classList.remove("hide");
    game.classList.add("hide");
    winner.classList.add("hide");
    restartGame();
    return
})

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

play.addEventListener("click", () => {
    home.classList.add("hide");
    game.classList.remove("hide");
    difficultyChecker();
    return
})

contact.addEventListener("click", () => {
    homeBox.classList.add("hide");
    contactBox.classList.remove("hide");
    return
})

back.addEventListener("click", () => {
    homeBox.classList.remove("hide");
    contactBox.classList.add("hide");
    successText.classList.add("hide");
    return
})

quit.addEventListener("click", () => {
    restartGame();
    hiScoresContainer.classList.add("hide");
    home.classList.remove("hide");
    game.classList.add("hide");
    return
})

restart.addEventListener("click", restartGame)


let cardIcons = document.getElementsByTagName("i");
let cards = document.getElementsByClassName("card");

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

function randomOrder() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.order = Math.floor(Math.random() * 20) + 1;
    }
    return
}

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

function checkForWin() {
    if (pairsFound.length === 20) {
        lastScore.innerHTML = score;
        winner.classList.remove("hide");
    }
    return
}

function stopFurtherClicks() {
    for (let i = 0; i < pairArray.length; i++) {
        let cardId = pairArray[i].target.id;
        let card = document.getElementById(`${cardId}`)
        card.classList.add("unclickable")
    }
    return
}

function incrementScore() {
    let currentScore = document.getElementById("currentScore");
    currentScore.innerHTML = score += 3;
    return
}

function decrementScore() {
    currentScore.innerHTML = score -= 0.5;
    return
}

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
// CSS Styling of pages and popups.
// Group code together in a logical way, grouping by variable declarations and relevant code (CSS & JS)
// Input field for username at the end to save their score. Use localStorage to save values.
//      username field added, now reference and use it. 
// SEO things in <head>