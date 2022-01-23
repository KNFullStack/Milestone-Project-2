![space icon (XXX IMAGE OF GAME) 
# Milestone Project 2 - Space Themed Memory Game
# Table of Contents
* [Introduction](XXXLINK TO SECTION IN THIS DOCUMENT, INCLUDING THE #LINK)

You can find the published website here: [Space Card Matching!](xxxLINK TO PUBLISHED WEBSITE).
# Introduction

The project is part of a Full Stack Developer course run by CodeInstitute. This is Milestone Project 2. This project was to create a fun, interactive card matching game for people to pass time with or challenge their friend's and family.

## Space Themed Card Matching Game

A mockup of the game can be seen below:

![Game Mockup Image](assets/readme-content/mockup.PNG)

# User Experience Design
## User Stories
### First Time Visitors
* What would I want to see as a first time visitor?
  1. Establish the theme upon seeing the first page.
  2. Easily find the button to play the game.
  3. Have feedback (visual or auditory) if a match is correct or incorrect.
  4. See my current score as I play the game.
### Returning Visitors
* What would I want to see as a returning visitor?
  1. Where to select different difficulties based, in order to test myself more.
  2. Is there a way I can contact the creator in order to submit bugs, errors or any other feedback?
### Frequent Users
* What would I want to see as a frequent visitor?
  1. A recent scoreboard feature so I could prove my score to someone I've challenged.
  2. Ability to enter a username so it can be put into the scoreboard.
  3. A way to contact the creator in order to suggest other kinds of games.
## Structure
Shown below are elements of the game that correspond to some of the User Stories:
* Big "Play" button in the middle of the first dialogue box.
> Easily find the button to play the game.
* Sounds are played when a correct or incorrect match is made and when the player wins.
> Have feedback (visual or auditory) if a match is correct or incorrect.
* A box containing the score is shown at the top of the game page.
> See my current score as I play the game.
* The background, website title and favicon initially show a space related element, with icons during the game being space related too.
> Establish the theme upon seeing the first page.
* Difficulties can be selected at the bottom of the first box when the page is loaded.
> Where to select different difficulties based, in order to test myself more.
* A "Contact" button is present on the first page that allows a user to submit feedback etc.
> Is there a way I can contact the creator in order to submit bugs, errors or any other feedback?

## Design
### Colors
The main colors for the game are black (rgb(0, 0, 0)), white (rgb(255, 255, 255)) and a deep pink (rgb(170, 19, 99)) for box auras.
### Typography
The text throughout the game uses the **Roboto** font.
### Images
The background image was created courtesy of my mentor, [Spencer Barriball](https://github.com/5pence).
### Sounds
The three sound clips that are used are from creators on [freesound](https://freesound.org/). See links to their profiles in the "Acknowledgements" section at the bottom of this README.
### Wireframes
Wireframes images can be seen below and also found in the "/assets/readme-content" folder. It contains a design for the desktop and mobile version of the game (images below show the game page Wireframes).

* Mobile: <br> ![Mobile Wireframe](assets/readme-content/Mobile-Wireframe-Game-Page.PNG)
* Desktop: <br> ![Desktop Wireframe](assets/readme-content/Desktop-Wireframe-Game-Page.PNG)

See link for PDF below:
* [Wireframe](assets/readme-content/Wireframe.pdf)

### Design Deviations
Compared to the original Wireframe there have been multiple deviations.
* The "Score:" box in the game page.
> Changes this to include 2 boxes, one showing the current score, and one showing the previous score of the game that was just played.
* The "Restart" and "Quit" button in the game page.
> Made these two button sit within the same container to give room for another button.
* The section above the game cards in the game page.
> Now contains a button to show recent scores too, which opens a pop up showing recent game wins (along with username, score and difficulty).
* The game page did nothing after a win apart from play a sound.
> The game page now displays a box after winning the game, which allows the user to go back to the main menu, restart the game, show the recent scores or just close the window.

Note: these changes were applied to both the desktop and mobile version of the game.

## Limitations
Currently there some limitations of the game.



# Features
## Current Features


## Future Features
Features that could be released in subsequent versions include:
* 

# Technologies
Technologies used are as follows.
## Languages
* [HTML5](https://en.wikipedia.org/wiki/HTML5)
  * Used as the main language to code the game's structure.
* [CSS3](https://en.wikipedia.org/wiki/CSS)
  * Used to incorporate custom styling into the game and its layout.
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
  * Used to create the game logic and interactive elements of the game.

## Libraries, Frameworks & Programs Used
1. 

# Testing

Due to the game having no backend functionality, the testing procedure is based on the visual aspect of the game. High level testing includes:
* Running the game on 3 different browsers and simulating responsiveness on each, varying screen sizes will be simulated, ranging from a minimum width of 300px to a maximum width of 3000px:
  * Google Chrome
  * Mozilla Firefox
  * Opera
* No layout items in the containers overlapping other layout items.
* Contact form to require an input in each field prior to submission.
* Game is designed according to the wireframes made prior to coding.

Test Results can be found here: [Test Results](/assets/readme-content/test-result.xlsx)

## Validation
### HTML Validation
"index.html" was run through the [W3C HTML Validator](https://validator.w3.org/), via the direct input method. XXXXXX ANY ISSUES?
### CSS Validation
CSS Stylesheet was run through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), via the direct input method. XXX ANY ISSUES
## User Scenarios - Testing
How does the game design enable the goals of a first time, returning and frequent user?<br>
### First Time User
* 
### Returning User
* 
### Frequent User
* 

## Known Bugs
1. 
2. 
3. 


## Lighthouse Results
Images below show the Lighthouse results on both mobile and desktop:
1. Mobile:<br>![Mobile Lighthouse](xxxmobilelighthouseimagexxx)
1. Desktop:<br>![Desktop Lighthouse](xxxdesktoplighthouseimagexxx)
### Performance
Initially a lower score was given for the Performance category, which was 80. The cause for this was the image sizes. [TinyJPG](https://www.tinyjpg.com/) was used to reduce the file sizes of these images, which increased the score.
### Accessibility
The text of the "Enquire now!" button in the landing page was originally white. This was flagged as a contrast issue and therefore changed to black to make it easier to read.

# Deployment
## Project Creation
To create the project, firstly a Chrome extension called "[Gitpod - Always ready to code](https://chrome.google.com/webstore/detail/gitpod-always-ready-to-co/dodmmooeoklaejobgleioelladacbeki?hl=en-GB)" was installed. A CodeInstitute template was use by navigating to the [GitHub Repo](https://github.com/Code-Institute-Org/gitpod-full-template) and clicking the "Use this template" button. The repository was named "KN-Fitness", the checkbox for "Include all branches" was checked and the green "Create repository from template" button was then clicked. From here, the green "GitPod" was then clicked (must use the above extension) and project folders and files created.

Common Git commands were used as follows:
* git add "filename-here" - used to stage files before commiting them.
* git commit -m "message here" - used to commit changes to the local repositry, with the message containing information on the changes that have occured.
* git status - used to check the tracking status of the file in the project.
* git push - used to push the changes to the GitHub repository.

## Publishing
To publish the project I performed the following steps:
1. Navigated to the project's [Github page](XXXLINKTOGITHUBPAGEXXX).
2. Clicked on the "Settings" button.
3. Clicked on the "Pages" button.
4. Under the "Source" heading, changed the "Branch" setting from "None" to "Main", then clicked save.
5. This gave a link to the [published game](XXXLINKTOPUBLISHEDWEBSITEXXX).
## Local Clone
To create a local clone of the project you can follow the steps below:
1. Navigate to the project's [Github page](XXXLINKTOGITHUBPAGEXXX).
2. Click the "Code" dropdown button.
3. From here there are two options:
     * Option 1: Click the "Download ZIP" button to download the files. This can be unzipped locally and opened with your preferred IDE.
     * Option 2: Copy the link from the HTTPS box shown. Then open your preferred IDE of choice and in the terminal window of your preferred directory, use the command "git clone" followed by the link that was copied. For example "git clone XXXLINKHEREFOR.GITXXX". This will clone the files in the selected directory.
# Acknowledgements
Would like to say thank you to my mentor Spencer Barriball for his help and guidance throughout the project.
## Code

## Media
