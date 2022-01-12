// General Gameplay.
let pairArray = [];
let pairsFound = [];
let score = 0;
const cardIcons = document.getElementsByTagName("i");
const cards = document.getElementsByClassName("card");
window.onload = playGame();

function playGame() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function (event) {
            this.children[0].style.display = "inline-block";
            pairArray.push(event);
            if (pairArray.length === 2) {
                if (pairArray[0].target.id === pairArray[1].target.id) {
                    difficultyChecker();
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
    const clickOne = pairArray[0].target.getAttribute("data-card-pair");
    const clickTwo = pairArray[1].target.getAttribute("data-card-pair");
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
const lastScore = document.getElementById("lastScore");

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
const restart = document.getElementById("restartButton");
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
                this.style.boxShadow = "0 0 100px 5px rgb(170, 19, 99),0 0 300px 10px rgb(127, 129, 16)";
            });
            cards[i].addEventListener("mouseleave", function () {
                this.style.boxShadow = "none";
            });
        }
        return
    }
    return
}

// Dialogue Box Hide/Show
const game = document.getElementById("gamepage");
const home = document.getElementById("homepage");
const contactBox = document.getElementById("contactFormBox");
const homeBox = document.getElementById("homepageBox");
const hiScoresContainer = document.getElementById("hiScoresContainer");
const play = document.getElementById("playButton");

play.addEventListener("click", () => {
    home.classList.add("hide");
    game.classList.remove("hide");
    difficultyChecker();
    return
})

const contact = document.getElementById("contactButton");
contact.addEventListener("click", () => {
    homeBox.classList.add("hide");
    contactBox.classList.remove("hide");
    return
})

const back = document.getElementById("backButton");
back.addEventListener("click", () => {
    homeBox.classList.remove("hide");
    contactBox.classList.add("hide");
    successText.classList.add("hide");
    return
})

const quit = document.getElementById("quitButton");
quit.addEventListener("click", () => {
    restartGame();
    hiScoresContainer.classList.add("hide");
    home.classList.remove("hide");
    game.classList.add("hide");
    return
})

const hiScores = document.getElementById("hiScoreButton");
hiScores.addEventListener("click", () => {
    hiScoresContainer.classList.remove("hide");
    return
})

const closeHiScores = document.getElementById("closeHiScores");
closeHiScores.addEventListener("click", () => {
    hiScoresContainer.classList.add("hide");
    return
})

const restartGamePostWin = document.getElementById("restartGamePostWin");
restartGamePostWin.addEventListener("click", () => {
    restartGame();
    winner.classList.add("hide");
    return
})

const returnHome = document.getElementById("returnHome");
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

const successText = document.getElementById("displaySuccess");

function displaySuccess() {
    successText.classList.remove("hide");
}

// to do list:
// Input field for username at the end to save their score. Use localStorage to save values.
//      username field added, now reference and use it. 
// can i insert a "secret" element into the game board in the middle, unclickable, 1 px, and give that a really big blur? maybe border radius of 50
// to give a star like appearance... could have multiple of them dotted about? this is in order to overcome grid gap being black