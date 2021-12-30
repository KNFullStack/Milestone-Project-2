let pairArray = [];
let score = 0;
let pairsFound = []; // can use this to house the total number of pairs to be found, and that are left to be found, then when length=0 the player has found all pairs
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
    } // the below was to catch errors when the pairArray was holding more than 2 items
    //which occured when using a setTimeOut to maintain the display of the icons and clicking other items
    else if (pairArray.length > 2) {
        console.log("error, resetting selection");
        pairArray = [];
    }
}

function checkForWin() {
    // when that array length is 20 (all 20 unique ids) display winning message and score.
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
    currentScore.innerHTML = ++score;
}

function decrementScore() {
    currentScore.innerHTML = --score;
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
    // randomise the placement of the divs in the grid
})

// to do list:
// figure out a way to randomise the placement on the screen of those divs.
// sort out the buttons functionality and styling
// link a contact form, where there is an API attached, as well as preventing the default action.
// think about a canvas type homepage?
// colour schemes
// switch case for scoring boundaries?
// function to check if the pairsFound is empty and then what happens next.
// browser cookies for a username etc?