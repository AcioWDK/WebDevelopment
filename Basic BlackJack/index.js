// Create two variables, firstCard and secondCard
// Set their values to a random number between 2-11

function getRandomNumber(){
    
    return Math.floor(Math.random() * (12-2) + 2)
    
}

// Create a variable, sum, and set it to the sum of the two cards


let hasBlackJack = false
let isAlive = true

// Declare a variable called message and assin its value to an empty string
let message = ""

// Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// Reassign the message variable to the string we re logging out
let messageEl = document.getElementById("message-el")

// Player wallet
let playerEl = document.getElementById("player-el")

let firstCard
let secondCard
let sum = 0
let allCards = []
let i = 1
let player = {
    name: "Acio",
    chips: 50
}


playerEl.textContent = player.name + ": $" + player.chips


function startGame(){
    firstCard = getRandomNumber()
    secondCard = getRandomNumber()
    sum = 0
    i = 1
    allCards = [firstCard, secondCard]
    
    sum = allCards[0]
    
    cardsEl.textContent = "Cards: " + allCards[0]
    
    
    
    isAlive = true
    hasBlackJack = false
    
    renderGame()
}

function renderGame(){
    
    sum += allCards[i]
    cardsEl.textContent += " " + allCards[i++]
   
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message = "Do you want a new card?"
    }else if (sum === 21){
        message = "Blackjack!!"
        hasBlackJack = true
        player.chips += 25.5
    }else {
        message = "Out of the game. Try again"
        isAlive = false
    }
   messageEl.textContent = message


   if (!isAlive && !hasBlackJack) {
    player.chips -= 3.5
   } 

playerEl.textContent = player.name + ": $" + player.chips

}

function newCard(){
    
    if(isAlive != false & hasBlackJack != true){
       
        let newCard = getRandomNumber()
        allCards.push(newCard)
        renderGame()
    }
}

