const toiletForm = document.getElementById("toilet-form");
toiletForm.addEventListener("submit", toiletPaperCalculator)

  function toiletPaperCalculator(e) {
    e.preventDefault()
    let numberOfRolls = document.getElementById("input4Rolls").value;
    let frequency = document.getElementById("input4Frequency").value;
    let numberOfSheets = document.getElementById("input4Sheets").value;
    let days =  (300*numberOfRolls) / (frequency*numberOfSheets);
    if (numberOfRolls == 0) {
      document.getElementById('calculatorOutput').innerHTML = "You don't have any toilet paper left!";
    }
    else if (days >= 1 ) {
      document.getElementById('calculatorOutput').innerHTML = "You can enjoy your time on the toilet for " + Math.round(days) + " more days !";
    }
    else {
      document.getElementById('calculatorOutput').innerHTML = "You just have a bit paper left, good luck finding new paper !";
    }
  }

