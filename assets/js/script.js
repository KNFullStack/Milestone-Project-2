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
    // randomise the placement of the divs in the grid
    let positionArray = [];
    while (positionArray.length < 20) {
        let randomNumber = Math.floor(Math.random() * 20);
        positionArray.push(randomNumber)
    }
    console.log(positionArray);
    // cards[0].style.order = 17
    // cards[1].style.order = 14
    // cards[2].style.order = 1
    // cards[3].style.order = 16
    // cards[4].style.order = 8
    // cards[5].style.order = 15
    // cards[6].style.order = 7
    // cards[7].style.order = 2
    // cards[8].style.order = 14
    // cards[9].style.order = 6
    // cards[10].style.order = 12
    // cards[11].style.order = 3
    // cards[12].style.order = 5
    // cards[13].style.order = 19
    // cards[14].style.order = 4
    // cards[15].style.order = 11
    // cards[16].style.order = 10
    // cards[17].style.order = 9
    // cards[18].style.order = 20
    // cards[19].style.order = 18
})

// to do list:
// figure out a way to randomise the placement on the screen of those divs.
// sort out the buttons functionality and styling
// link a contact form, where there is an API attached, as well as preventing the default action.
// think about a canvas type homepage?
// colour schemes
// switch case for scoring boundaries?
// browser cookies for a username etc?