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
                    wrongSound.play();
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

function randomOrder() {
    // Changes the order of the cards on the game board.
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.order = Math.floor(Math.random() * 20) + 1;
    }
    return
}

function matchingPair() {
    // Checks whether the 2 clicked cards are a match.
    const clickOne = pairArray[0].target.getAttribute("data-card-pair");
    const clickTwo = pairArray[1].target.getAttribute("data-card-pair");
    if (clickOne === clickTwo) {
        incrementScore();
        correctSound.play();
        stopFurtherClicks();
        pairsFound.push(...pairArray);
        checkForWin();
        pairArray = [];
    } else if (clickOne !== clickTwo) {
        decrementScore();
        wrongSound.play();
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
        winnerSound.play();
        addScore();
    }
    return
}

function stopFurtherClicks() {
    // Stops a pair being clicked once a match is found.
    for (let i = 0; i < pairArray.length; i++) {
        let cardId = pairArray[i].target.id;
        let card = document.getElementById(`${cardId}`)
        card.classList.add("unclickable")
    }
    return
}

function incrementScore() {
    // Adds 3 points to the total score.
    let currentScore = document.getElementById("currentScore");
    currentScore.innerHTML = score += 3;
    return
}

function decrementScore() {
    // Removes 0.5 points for an incorrect guess, or clicking the same card twice.
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
    recentScoresContainer.classList.add("hide");
    winner.classList.add("hide");
    return
}

function userPlayGame() {
    // Starts the game once Play button is clicked or enter key is pressed inside username input
    home.classList.add("hide");
    game.classList.remove("hide");
    difficultyChecker();
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
        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener("mouseover", function () {
                this.style.backgroundColor = "transparent";
            });
            cards[i].addEventListener("mouseleave", function () {
                this.style.backgroundColor = "transparent";
            });
        }
        return
    } else if (hard) {
        duration = 100;
        durations();
        mouseHoverFunction();
        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener("mouseover", function () {
                this.style.backgroundColor = "transparent";
            });
            cards[i].addEventListener("mouseleave", function () {
                this.style.backgroundColor = "transparent";

            });
        }
        return
    } else if (insane) {
        duration = 1;
        durations();
        mouseHoverFunction();
        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener("mouseover", function () {
                this.style.backgroundColor = "white";
            });
            cards[i].addEventListener("mouseleave", function () {
                this.style.backgroundColor = "transparent";
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
                this.style.boxShadow = "0 0 10px 5px rgb(127, 129, 16),0 0 30px 10px rgb(170, 19, 99)";
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
const recentScoresContainer = document.getElementById("recentScoresContainer");
const play = document.getElementById("playButton");
const winner = document.getElementById("winner");

play.addEventListener("click", () => {
    userPlayGame();
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
    recentScoresContainer.classList.add("hide");
    home.classList.remove("hide");
    game.classList.add("hide");
    nameInput.value = "";
    return
})

const hiScores = document.getElementById("recentScoreButton");
hiScores.addEventListener("click", () => {
    recentScoresContainer.classList.remove("hide");
    return
})

const closeRecentScores = document.getElementById("closeRecentScores");
closeRecentScores.addEventListener("click", () => {
    recentScoresContainer.classList.add("hide");
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
    nameInput.value = "";
    return
})

const closeWinBox = document.getElementById("closeWinBox");
closeWinBox.addEventListener("click", () => winner.classList.add("hide"));

const nameInput = document.getElementById("username");

// Press enter to play
nameInput.addEventListener("keydown", (event) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        userPlayGame();
    }
});

// Recent Wins Box
let scoreboardArray = [];
let difficultyForScoreboard;
let scoreboardObject = {
    name: "",
    score: "",
    difficulty: ""
}
const toAppendTo = document.getElementById("toAppendTo")

function addScore() {
    // Adds player name, score and difficulty to the recent wins board.
    if (normal) {
        difficultyForScoreboard = "Normal"
    } else if (hard) {
        difficultyForScoreboard = "Hard"
    } else if (insane) {
        difficultyForScoreboard = "Insane"
    };
    if (nameInput.value === "") {
        nameInput.value = "Anonymous"
    }
    scoreboardObject = {
        name: `${nameInput.value}`.toString(),
        score: `${currentScore.textContent}`,
        difficulty: `${difficultyForScoreboard}`
    };
    if (scoreboardArray.length === 10) {
        scoreboardArray.shift();
        scoreboardArray.push(scoreboardObject);
    } else if (scoreboardArray.length < 10) {
        scoreboardArray.push(scoreboardObject);
    }

    let tableHtml = `<table><thead><tr><th>Name</th><th>Score</th><th>Difficulty</th></tr></thead><tbody>`;

    for (details of scoreboardArray) {
        let rowHtml = `<tr><td>${details.name}</td><td>${details.score}</td><td>${details.difficulty}</td></tr>`;
        tableHtml += rowHtml
    }
    tableHtml += `</tbody></table>`
    toAppendTo.innerHTML = tableHtml;
    // change below to window.unload then do that - overwriting all of them
    saveScore();
}

// localStorage functions
function saveScore() {
    // Function to save the current scores to localStorage
    let itemsToSave = toAppendTo.firstChild.getElementsByTagName("td");
    let itemsToSaveArray = [];
    for (let i = 0; i < itemsToSave.length; i++) {
        itemsToSaveArray.push(itemsToSave[i].innerText);
    }
    localStorage.setItem("scoresArray", JSON.stringify(itemsToSaveArray))
}

const scoresArray = JSON.parse(localStorage.getItem("scoresArray"));

function loadScore() {
    // Function to load the scores from localStorage
    // so now i have the array... i need to use this to build the table when the page loads
    let tableHtml = `<table><thead><tr><th>Name</th><th>Score</th><th>Difficulty</th></tr></thead><tbody>`;
    // for (let i = 0; i < scoresArray.length; i++) {
    //     let rowHtml = `<tr><td>${details.name}</td><td>${details.score}</td><td>${details.difficulty}</td></tr>`;
    //     tableHtml += rowHtml
    // }
    tableHtml += `</tbody></table>`
    toAppendTo.innerHTML = tableHtml;
    // can i take the scoresArray.length / 3 to a variable, which would = the amount of rows needed

}

function sendMail(contactForm) {
    // EmailJS Functionality
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

// Audio Clips
const winnerSound = new Audio("assets/sounds/winner.wav");
const wrongSound = new Audio("assets/sounds/wrong.wav");
const correctSound = new Audio("assets/sounds/correct.wav");

// to do list:
// Use localStorage to save values of highscores - set the array as the objects and resave each win.
// feedback from sending message? check