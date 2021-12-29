let pairArray = [];
let score = 0;
let allPairsFound = []; // can use this to house the total number of pairs to be found, and that are left to be found, then when length=0 the player has found all pairs

function matchingPair() {
    if (
        pairArray[0].getAttribute("data-card-pair") ===
        pairArray[1].getAttribute("data-card-pair")
    ) {
        console.log("correct");
        incrementScore();
        // do something with the pair that has been found - the allPairsFound array, AND the physical div.
        pairArray = [];
    } else if (
        pairArray[0].getAttribute("data-card-pair") !==
        pairArray[1].getAttribute("data-card-pair")
    ) {
        console.log("incorrect");
        decrementScore();
        pairArray = [];
    }
}

let cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function (event) {
        pairArray.push(event.target);
        if (pairArray.length === 2) {
            if (pairArray[0].id === pairArray[1].id) {
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

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseover", function () {
        this.style.backgroundColor = "darkgreen";
    });
    cards[i].addEventListener("mouseleave", function () {
        this.style.backgroundColor = "green";
    });
}

function incrementScore() {
    let currentScore = document.getElementById("currentScore");
    currentScore.innerHTML = ++score;
}

function decrementScore() {
    currentScore.innerHTML = --score;
}

// to do list:
// add lots of icons to the HTML document
// figure out a way to randomise the placement on the screen of those divs.
// sort out the buttons functionality and styling
// link a contact form, where there is an API attached, as well as preventing the default action.
// think about a canvas type homepage?
// colour schemes
// switch case for scoring boundaries?
// function to check if the allPairsFound is empty and then what happens next.