let firstCard = 1
let secondCard = 10
let sum = firstCard + secondCard
let cards = [firstCard, secondCard]
let hasBlackJack = false
let isAlive = true
let message = ''

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum

    if (sum < 20 || sum === 20) {
        console.log("Do you want to draw another card?")
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        console.log("Blackjack!")
        message = "Blackjack!"
        hasBlackJack = true
    } else {
        console.log("You've lost")
        isAlive = false
        message = "You've lost"
    }

    messageEl.textContent = message
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    console.log(message)
}

function newCard() {
    console.log("Drawing a new card from the deck!")
    
    let card = 8
    sum += card
    cards.push(card)
    console.log(cards)

    renderGame()
}

// --- Practice #1 ---

// let age = 22

// if (age < 21) {
//     console.log("You can not enter the club!")
// } else {
//     console.log("Welcome!")
// }

// --- Practice #2 ---

// let age = 100

// if (age < 100) {
//     console.log("Not eligible")
// } else if (age === 100) {
//     console.log("Here's your birthday card from the King!")
// } else {
//     console.log("Not eligible, you have already gotten one")
// }

// --- Practice #3 ---

// let skills = ["Tactical Management", "Factory Design", "Efficiency Estimation"]

// console.log(skills[1])
// console.log(skills[2])
// console.log(skills[0])

// let myself = ["Jev Glossary", 20, true]

// console.log(myself[0])
// console.log(myself[1])
// console.log(myself[2])

// --- Practice #4 ---

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Beem working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// messages.push(newMessage)
// console.log(messages)

// messages.pop()
// console.log(messages)