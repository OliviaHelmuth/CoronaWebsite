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
      let days =  (300*numberOfRolls) / (frequency*numberOfSheets);
      if (numberOfRolls == 0) {
        calculatorOutput.innerHTML = "You don't have any toilet paper left!";
      }
      else if (days >= 1 ) {
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

// "shoping-list".addEventListener("submit", addItem)
// // function addItem() {


// // }