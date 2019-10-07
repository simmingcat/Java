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

function geometry (two , four) { //Notice these parameters are local and do not mix with "number" variable
  if ( two > four) return 'four'; //must be first, return will not allow rest of code to run
 //ternary operator example
  //Seems odd, the inequality, here, is reading the opposite
}

function checkboxes() {
  let checkbox1, checkbox2;
  checkbox1 = document.getElementById('Checkbox1').checked;
  checkbox2 = document.getElementById('Checkbox2').checked;

  if ( checkbox1 == true ) {
    document.getElementById('checkbox1_answer').innerHTML = "2";
  } else {
    document.getElementById('checkbox1_answer').innerHTML = "Answer?";
  }
  if ( checkbox2 == true ) {
    document.getElementById('checkbox2_answer').innerHTML = "4";
  } else {
    document.getElementById('checkbox2_answer').innerHTML = "Answer?";
  }


// This coding illustrates the advanced method
function main() {
  //console.log("It works");

  let firstNumber, secondNumber, text;

  //Get the Width-value from id=textfield1
  firstNumber = document.getElementById('textfield1').value;

  //testNaN (firstNumber);
  document.getElementById('validityTest1').innerHTML = alert ( testNaN (firstNumber));
  document.getElementById('validityTest1').innerHTML = testNaN (firstNumber);

  //Get the Height-value from id=textfield2
  secondNumber = document.getElementById('textfield2').value;
  //testNaN (secondNumber);
  document.getElementById('validityTest2').innerHTML = alert ( testNaN (secondNumber));
  document.getElementById('validityTest2').innerHTML = testNaN (secondNumber);

  if (stop == true) {
    document.getElementById('answer').innerHTML = "Restart the example, a width or height needs to be a number."
  } else {
    console.log("The display geometry is", geometry (firstNumber, secondNumber) );
    document.getElementById('answer').innerHTML = "This display is " + geometry (firstNumber, secondNumber);
  }

}
