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

function orderingThree () {


}


function checkbox() {
  let checkbox1, checkbox2, checkbox3, checkbox4;
  
  checkbox1 = document.getElementById('Checkbox1').checked;
  checkbox2 = document.getElementById('Checkbox2').checked;
  checkbox3 = document.getElementById('Checkbox3').checked;
  checkbox4 = document.getElementById('Checkbox3').checked;

  if ( checkbox1 == true ) {
    document.getElementById('checkbox1_answer').innerHTML = "False, 50% is less than 60%";
  } else {
    document.getElementById('checkbox1_answer').innerHTML = "Answer?";
  }
  if ( checkbox2 == true ) {
    document.getElementById('checkbox2_answer').innerHTML = "False, 70% > 65%";
  } else {
    document.getElementById('checkbox2_answer').innerHTML = "Answer?";
  }
  if ( checkbox3 == true ) {
    document.getElementById('checkbox3_answer').innerHTML = "False, these numbers are the same";
  } else {
    document.getElementById('checkbox3_answer').innerHTML = "Answer?";
  }
  if ( checkbox4 == true ) {
    document.getElementById('checkbox4_answer').innerHTML = "False, 95 is not equal to 100";
  } else {
    document.getElementById('checkbox4_answer').innerHTML = "Answer?";
  }
}


function main() {
let firstNumber, secondNumber, thirdNumber, fourthNumber;

firstNumber = document.getElementById('textfield1').value;
document.getElementById('validityTest1').innerHTML = alert ( testNaN (firstNumber));
document.getElementById('validityTest1').innerHTML = testNaN (firstNumber);

secondNumber = document.getElementById('textfield2').value;
document.getElementById('validityTest2').innerHTML = alert ( testNaN (secondNumber));
document.getElementById('validityTest2').innerHTML = testNaN (secondNumber);

thirdNumber = document.getElementById('textfield3').value;
document.getElementById('validityTest3').innerHTML = alert ( testNaN (thirdNumber));
document.getElementById('validityTest3').innerHTML = testNaN (thirdNumber);

fourthNumber = document.getElementById('textfield4').value;
document.getElementById('validityTest4').innerHTML = alert ( testNaN (fourthNumber));
document.getElementById('validityTest4').innerHTML = testNaN (fourthNumber);


console.log("In memory, \n the first number is " + firstNumber + " and \n the second number is " + secondNumber + " and \n the third number is " + thirdNumber +" and \n the fourth number is " + fourthNumber);

//Final Output to inner HTML & Console

if (stop == true) {
  document.getElementById('answer').innerHTML = "Restart the example, a width or height needs to be a number.";
} else {
  console.log("The smallest to largest order is ", orderingThree (firstNumber, secondNumber, thirdNumber, fourthNumber) );
  document.getElementById('answer').innerHTML = "The numbers in order from smallest to largets is ... \n"
  orderingThree(firstNumber, secondNumber, thirdNumber, fourthNumber);
}
}
