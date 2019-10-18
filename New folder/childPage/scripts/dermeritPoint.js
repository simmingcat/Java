//console.log("Did you change my file name?");
console.log("You made it to the console!");

//Global Variables
let stop = false; //NAN Boolean Memory

function testNaN (number) {
  //console.log(stop);
  if ( isNaN (number) ) {
    stop = true;
    return "Type a real number"
  } else {
    return "Input Validated"
  }
}

//Note: this function does not use a WHILE Loop to take any speed limit
//and calcuate the demerit points and speed where lisence is taken away
function demeritCalculation (speedLimit, speed) { //Notice these parameters are local and do not mix with "number" variable
  //Example of Cascading Returns
  if (speed < speedLimit) return 'Speed is less than the speed limit';
  if (speed < speedLimit + 1*5) return 'Speed is over speed limit but within grace range, no demerit points';
  if (speed < speedLimit + 2*5) return '1 demerit point';
  if (speed < speedLimit + 3*5) return '2 demerit point';
  if (speed < speedLimit + 4*5) return '3 demerit point';
  if (speed < speedLimit + 5*5) return '4 demerit point';
  if (speed < speedLimit + 6*5) return '5 demerit point';
  if (speed < speedLimit + 7*5) return '6 demerit point';
  if (speed < speedLimit + 8*5) return '7 demerit point';
  if (speed < speedLimit + 9*5) return '8 demerit point';
  if (speed < speedLimit + 10*5) return '9 demerit point';
  if (speed < speedLimit + 11*5) return '10 demerit point';
  if (speed < speedLimit + 12*5) return '11 demerit point';
  if (speed < speedLimit + 13*5) return '12 demerit point';
  if (speed < speedLimit + 14*5) return '13 demerit point';
  //Note: to create WHILE Statement, look for number patterns Above
  //Note: to create FOR Statement, must divide to calculate maximum demerit points (x-1)
  //Notice only inequlaity has changed below
  if (speed >= speedLimit + 14*5) return 'You have doubled the speed limit, your license is taken away';
  return 'Check the Algorithm for errors';
}

function checkboxes() {
  let checkbox1, checkbox2, checkbox3;
  checkbox1 = document.getElementById('Checkbox1').checked;
  checkbox2 = document.getElementById('Checkbox2').checked;
  checkbox3 = document.getElementById('Checkbox3').checked;
  if ( checkbox1 == true ) {
    document.getElementById('checkbox1_answer').innerHTML = "Speed?";
  } else {
    document.getElementById('checkbox1_answer').innerHTML = "Answer?";
  }
  if ( checkbox2 == true ) {
    document.getElementById('checkbox2_answer').innerHTML = "Speed?";
  } else {
    document.getElementById('checkbox2_answer').innerHTML = "Answer?";
  }
  if ( checkbox3 == true ) {
    document.getElementById('checkbox3_answer').innerHTML = "Speed?";
  } else {
    document.getElementById('checkbox3_answer').innerHTML = "Answer?";
  }
}

function main() {
  //console.log("It works");

  let firstNumber, secondNumber;

  //Get the Width-value from id=textfield1
  firstNumber = document.getElementById('textfield1').value;

  //IF Statement to autopopulate speed limit and catch errors
  if (firstNumber == '') {
    firstNumber = 70;
  } else if (firstNumber != '') {
  } else {
    console.log("Speed Limit errors in .js file, please review");
  }
  //testNaN (firstNumber);
  document.getElementById('validityTest1').innerHTML = alert ( testNaN (firstNumber));
  document.getElementById('validityTest1').innerHTML = testNaN (firstNumber);

  //Get the Height-value from id=textfield2
  secondNumber = document.getElementById('textfield2').value;
  //console.log(secondNumber);
  if (secondNumber == '') {
    stop = true;
    secondNumber = 0;
  } else if (secondNumber != '') {
  } else {
    console.log("Speed for demerit calculation errors in .js file, please review");
  }

  //testNaN (secondNumber);
  document.getElementById('validityTest2').innerHTML = alert ( testNaN (secondNumber));
  document.getElementById('validityTest2').innerHTML = testNaN (secondNumber);

  //Illustrates one example of character escapes
  console.log("In memory, \n the first number is " + firstNumber + " and \n the second number is " + secondNumber);
  document.getElementById('speedLimit').innerHTML = firstNumber;
  document.getElementById('speed').innerHTML = secondNumber;

  if (stop == true) {
    document.getElementById('answer').innerHTML = "Restart the example, speed limit or speed need to be entered, non-zero, values."
  } else {
    console.log("Demerit Calculation is: ", demeritCalculation (firstNumber, secondNumber) );
    document.getElementById('answer').innerHTML = "Demerit Calculation is: " + demeritCalculation (firstNumber, secondNumber);
  }
}
