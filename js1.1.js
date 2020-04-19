  function toiletPaperCalculator() {
    
    let numberOfRolls = document.getElementById("input4Rolls").value;
    let frequency = document.getElementById("input4Frequency").value;
    let numberOfSheets = document.getElementById("input4Sheets").value;
    let days =  (400*numberOfRolls) / (frequency*numberOfSheets);
    if (days >= 1 ) {
      document.getElementById('calculatorOutput').innerHTML = "You can enjoy your time on the toilet for " + Math.round(days) + " more days !";
    }
    else {
      document.getElementById('calculatorOutput').innerHTML = "You just have a bit paper left, good luck finding new paper !";
    }
  }