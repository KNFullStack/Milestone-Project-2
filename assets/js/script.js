let pairArray = [];
let score = 0;
let pairsFound = [];
let cardIcons;

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
        // how do i get the below code to maintain the display for 2 seconds before changing to "none"? *************************************************
        for (let i = 0; i < pairArray.length; i++) {
            let cardId = pairArray[i].target.id;
            let card = document.getElementById(`${cardId}`).getElementsByTagName("i");
            card[0].style.display = "none";
        }
        pairArray = [];
    }
}

function checkForWin() {
    if (pairsFound.length === 20) {
        // a pop up saying congratulations you have won! along with a button to quit back to the default screen, or a button to restart the game.
        // box should also contain links to socials?
        // box should also contain 
    }
}

function stopFurtherClicks() {
    for (let i = 0; i < pairArray.length; i++) {
        let cardId = pairArray[i].target.id;
        let card = document.getElementById(`${cardId}`)
        card.classList.add("unclickable")
    }
}

function incrementScore() {
    let currentScore = document.getElementById("currentScore");
    currentScore.innerHTML = score += 3;
}

function decrementScore() {
    currentScore.innerHTML = score -= 0.5;
}

let play = document.getElementById("playButton");
play.addEventListener("click", function () {
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function (event) {
            this.children[0].style.display = "inline-block";
            pairArray.push(event);
            if (pairArray.length === 2) {
                if (pairArray[0].target.id === pairArray[1].target.id) {
                    console.log("you clicked the same item twice!");
                    for (let i = 0; i < pairArray.length; i++) {
                        let cardId = pairArray[i].target.id;
                        let card = document.getElementById(`${cardId}`).getElementsByTagName("i");
                        card[0].style.display = "none";
                    }
                    decrementScore()
                    pairArray = [];
                } else {
                    matchingPair();
                }
            } else if (pairArray.length === 3) {
                console.log("An error has occured. Resetting last selection.");
                pairArray = [];
            }
        });
    }
    cardIcons = document.getElementsByTagName("i");
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
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.order = Math.floor(Math.random() * 20) + 1;

    }
})

// to do list:
// sort out the buttons functionality and styling
// link a contact form, where there is an API attached, as well as preventing the default action.
// think about a canvas type homepage?
// colour schemes
// switch case for scoring boundaries?
// browser cookies for a username etc?