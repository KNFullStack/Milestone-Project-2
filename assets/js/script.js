let pairArray = [];
let pairsFound = [];
let score = 0;
let cardIcons = document.getElementsByTagName("i");
let cards = document.getElementsByClassName("card");
let game = document.getElementById("gamepage");
let home = document.getElementById("homepage");
let winner = document.getElementById("winner");
let play = document.getElementById("playButton");
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

returnHome.addEventListener("click", () => {
    home.classList.remove("hide");
    game.classList.add("hide");
    winner.classList.add("hide");
    restartGame();
})

difficultyNormal.addEventListener("click", () => {
    normal = true;
    hard = false;
    insane = false;
})
difficultyHard.addEventListener("click", () => {
    normal = false;
    hard = true;
    insane = false;
})
difficultyInsane.addEventListener("click", () => {
    normal = false;
    hard = false;
    insane = true;
})

function hideIcons() {
    if (normal) {
        duration = 300;
    } else if (hard) {
        duration = 100;
    } else if (insane) {
        duration = 1;
    }
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

play.addEventListener("click", () => {
    home.classList.add("hide");
    game.classList.remove("hide");
})

contact.addEventListener("click", () => {
    homeBox.classList.add("hide");
    contactBox.classList.remove("hide");
    return
})

back.addEventListener("click", () => {
    homeBox.classList.remove("hide");
    contactBox.classList.add("hide");
    return
})

quit.addEventListener("click", () => {
    restartGame();
    home.classList.remove("hide");
    game.classList.add("hide");
})

restart.addEventListener("click", restartGame)

window.onload = playGame();

function playGame() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function (event) {
            this.children[0].style.display = "inline-block";
            pairArray.push(event);
            if (pairArray.length === 2) {
                if (pairArray[0].target.id === pairArray[1].target.id) {
                    console.log("you clicked the same item twice!");
                    hideIcons()
                    decrementScore()
                    pairArray = [];
                    return
                } else {
                    matchingPair();
                    return
                }
            } else if (pairArray.length === 3) {
                console.log("An error has occured. Resetting last selection.");
                hideIcons();
                pairArray = [];
                return
            }
            return
        });
    }
    for (let i = 0; i < cardIcons.length; i++) {
        cardIcons[i].style.display = "none";
    }
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("mouseover", function () {
            this.style.backgroundColor = "darkgreen";
        });
        cards[i].addEventListener("mouseleave", function () {
            this.style.backgroundColor = "green";
        });
    }
    randomOrder();
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
    randomOrder()
    return
}

function matchingPair() {
    let clickOne = pairArray[0].target.getAttribute("data-card-pair");
    let clickTwo = pairArray[1].target.getAttribute("data-card-pair");
    if (clickOne === clickTwo) {
        console.log("correct");
        incrementScore();
        stopFurtherClicks();
        pairsFound.push(...pairArray);
        checkForWin();
        pairArray = [];
    } else if (clickOne !== clickTwo) {
        console.log("incorrect");
        decrementScore();
        hideIcons()
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

// to do list:
// sort out the buttons functionality and styling
// link a contact form, where there is an API attached, as well as preventing the default action.
// think about a canvas type homepage?
// colour schemes
// switch case for scoring boundaries?
// browser cookies for a username etc?