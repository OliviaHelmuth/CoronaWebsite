// toilet paper calc
const toiletForm = document.getElementById("toilet-form");
toiletForm.addEventListener("submit", toiletPaperCalculator)
function toiletPaperCalculator(e) {
  e.preventDefault()
  let numberOfRolls = document.getElementById("input4Rolls").value;
  let frequency = document.getElementById("input4Frequency").value;
  let numberOfSheets = document.getElementById("input4Sheets").value;
  let calculatorOutput = document.getElementById('calculatorOutput')

  if (
    isValidNumber(numberOfRolls) &&
    isValidNumber(frequency) &&
    isValidNumber(numberOfSheets)
  ) {
    let days = (300 * numberOfRolls) / (frequency * numberOfSheets);
    if (numberOfRolls == 0) {
      calculatorOutput.innerHTML = "You don't have any toilet paper left!";
    }
    else if (days >= 1) {
      calculatorOutput.innerHTML = "You can enjoy your time on the toilet for " + Math.round(days) + " more days !";
    }
    else {
      calculatorOutput.innerHTML = "You just have a bit paper left, good luck finding new paper !";
    }
  }
  else {
    calculatorOutput.innerHTML = "Please just enter numbers !";
  }
}
function isValidNumber(value) {
  let parsedValue = parseInt(value)
  if (Number.isInteger(parsedValue)) {
    return true
  }
  else {
    return false
  }
}
// shopping list
let addItemButton = document.getElementById("add-item-button");
addItemButton.addEventListener("click", addItem);
let testVar = document.getElementById("test")
function addItem() {
  let addedItem = document.getElementById("shopping-list-input").value;
  let itemTemplate =
    `<div class="input-group-prepend">
       <div class="input-group-text">
        <input type="checkbox" aria-label="Checkbox for following text input">
       </div>
     </div>
      <input type="text" class="form-control addedItem" aria-label="Text input with checkbox" value="${addedItem}" disabled>
      <button type="button" class="btn btn-danger delete-button">delete</button>`;
  let addTemplate = document.createElement("div");
  addTemplate.className = "input-group mb-3"
  addTemplate.innerHTML = itemTemplate;
  shoppingList.appendChild(addTemplate);
  let aDeleteButton = addTemplate.getElementsByClassName('delete-button')[0];
  aDeleteButton.addEventListener("click", deleteButtonExecution);
}
function deleteButtonExecution() {
  let parent = this.parentNode.parentNode
  let child = this.parentNode
  parent.removeChild(child)
}
// Tic Tac Toe
const playerTurn = document.getElementById("playerTurn");
const resetButton = document.getElementById("resetButton");
for (let i = 1; i < 10; i++) {
    const button = document.getElementById("button" + i);
    button.addEventListener("click", game);
}
resetButton.addEventListener("click", reset);
let count = 0;
let playerOne = [];
let playerTwo = [];
const lookUpWon = [
    ["button1", "button2", "button3"],
    ["button4", "button5", "button6"],
    ["button7", "button8", "button9"],
    ["button1", "button4", "button7"],
    ["button2", "button5", "button8"],
    ["button3", "button6", "button9"],
    ["button1", "button5", "button9"],
    ["button3", "button5", "button7"]
];
function game() {
    if (count % 2 === 0) {
        this.innerHTML = "0";
        playerOne.push(this.id);
    }
    else {
        this.innerHTML = "X";
        playerTwo.push(this.id);
    }
    count++;
    setTimeout(displayWhosTurn, 100);
    this.setAttribute("disabled", "disabled");
    whoWon()
}
function whoWon() {
    // it just needs to execute if count > 4
    for (let i = 0; i < lookUpWon.length; i++) {
        if (lookUpWon[i].every(function (elem) {
            return playerOne.includes(elem)
        })) {
            alert("Player 1 won !");
            disableAfterVictory();
            return;
        }
    }
    for (let i = 0; i < lookUpWon.length; i++) {
        if (lookUpWon[i].every(function (elem) {
            return playerTwo.includes(elem)
        })) {
            alert("Player 2 won !");
            disableAfterVictory();
            return;
        }
    }
    if (count === 9) {
        alert("draw !")
    }
}
function displayWhosTurn() {
    let turn;
    if (count % 2 === 0) {
        turn = "Player 1"
    }
    else {
        turn = "Player 2"
    }
    playerTurn.innerHTML = turn
}
function reset() {
    count = 0;
    playerOne = [];
    playerTwo = [];
    for (let i = 1; i < 10; i++) {
        const button = document.getElementById("button" + i);
        button.innerHTML = "";
        button.removeAttribute("disabled");
    }
    displayWhosTurn();
}
function disableAfterVictory() {
    for (let i = 1; i < 10; i++) {
        const button = document.getElementById("button" + i);
        button.setAttribute("disabled", "disabled");
    }
}