let GlobalDiceNumber = 0

let userRound = 0

let finished = 0

let firstUserCurrent
let secondUserCurrent

let firstUserScore = parseInt(document.getElementById("score--0").innerHTML)
let secondUserScore = parseInt(document.getElementById("score--1").innerHTML)

function generateRandomDiceNumber() {
    if(finished == 0) {
    GlobalDiceNumber = Math.trunc((Math.random() * 6) + 1)
    document.getElementsByClassName("dice")[0].src = `dice-${GlobalDiceNumber}.png`
    checkUserAndMakeScore()
    }
}

function checkUserAndMakeScore() {
    firstUserCurrent = parseInt(document.getElementById("current--0").innerHTML)
    secondUserCurrent = parseInt(document.getElementById("current--1").innerHTML)

    if(firstUserScore >= 100) {
    document.getElementsByClassName("player--0")[0].style.backgroundColor = "#000000"
    finished = 1
    }
    else if(secondUserScore >=100) {
    document.getElementsByClassName("player--1")[0].style.backgroundColor = "#000000"
    finished = 1
    }

    else if (userRound == 0) {
    document.getElementsByClassName("player--0")[0].style.backgroundColor = "#ff5f5f66" 
    document.getElementsByClassName("player--1")[0].style.backgroundColor = "#ffffff66"

        if (GlobalDiceNumber == 1) {
            firstUserCurrent = 0
            document.getElementById("current--0").innerHTML = firstUserCurrent
            userRound = 1
        } else {
            firstUserCurrent = firstUserCurrent + GlobalDiceNumber
            document.getElementById("current--0").innerHTML = firstUserCurrent
        }
    }
    else if (userRound == 1) {
    document.getElementsByClassName("player--0")[0].style.backgroundColor = "#ffffff66"
    document.getElementsByClassName("player--1")[0].style.backgroundColor = "#ff5f5f66"  
        if (GlobalDiceNumber == 1) {
            secondUserCurrent = 0
            document.getElementById("current--1").innerHTML = secondUserCurrent
            userRound = 0
        } else {
            secondUserCurrent = secondUserCurrent + GlobalDiceNumber
            document.getElementById("current--1").innerHTML = secondUserCurrent
        }
    }
}

function storeUserScore() {
    if (userRound == 0) {
        firstUserScore = firstUserCurrent + firstUserScore
        firstUserCurrent = 0
        document.getElementById("current--0").innerHTML = firstUserCurrent
        document.getElementById("score--0").innerHTML = firstUserScore
        userRound = 1
    }
    else if (userRound == 1) {
        secondUserScore = secondUserCurrent + secondUserScore
        secondUserCurrent = 0
        document.getElementById("current--1").innerHTML = secondUserCurrent
        document.getElementById("score--1").innerHTML = secondUserScore
        userRound = 0
    }
}

function restartAllGame() {
    document.getElementById("current--1").innerHTML = 0
    document.getElementById("score--1").innerHTML = 0
    document.getElementById("current--0").innerHTML = 0
    document.getElementById("score--0").innerHTML = 0
    finished = 0
    firstUserCurrent = 0
    secondUserCurrent = 0
    userRound = 0
    firstUserScore = 0
    secondUserScore = 0

    document.getElementsByClassName("player--0")[0].style.backgroundColor = "#ff5f5f66" 
    document.getElementsByClassName("player--1")[0].style.backgroundColor = "#ffffff66"
}