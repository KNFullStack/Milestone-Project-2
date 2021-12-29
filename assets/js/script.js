let pairArray = [];
let score = 0;
let pairsFound = []; // can use this to house the total number of pairs to be found, and that are left to be found, then when length=0 the player has found all pairs

function matchingPair() {
    if (
        pairArray[0].getAttribute("data-card-pair") ===
        pairArray[1].getAttribute("data-card-pair")
    ) {
        console.log("correct");
        incrementScore();
        // do something with the pair that has been found - the pairsFound array, AND the physical div.
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
        cards[i].addEventListener("click", function () {
            this.style.display = "inline.block";
        });
    }
    let cardIcons = document.getElementsByTagName("i");
    for (let i = 0; i < cardIcons.length; i++) {
        cardIcons[i].style.display = "none"
    }

    // display icons once clicked - insert into below function?
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