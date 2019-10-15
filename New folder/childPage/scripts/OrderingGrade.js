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

  function orderingThree (first, second, third, fourth, five) {
  let memory1;
  while (first > second || second > third || third > fourth || fourth > five) {

  if (first > second) {
    memory1 = second;
    second = first;
    first = memory1;
  }
  if (second > third) {
    memory1 = third;
    third = second;
    second = memory1;
    }
    if (third > fourth) {
       memory1 = fourth
       fourth = third
       third = memory1

    }
    if (fourth > five) {
       memory1 = five
       five = fourth
      fourth = memory1
    }
  }

  if (first <= second) {
  if (second <= third) {
    if (third <= fourth){
      if (fourth <= five){

  return first + ", " + second + ", " + third + ", " + fourth + ", " + five;
}
  }
}
  } else {
  return "Check program for errors"
  }
  }
  function checkboxes() {

  let checkbox1, checkbox2, checkbox3, checkbox4, checkbox5;
  checkbox1 = document.getElementById('Checkbox1').checked;
  checkbox2 = document.getElementById('Checkbox2').checked;
  checkbox3 = document.getElementById('Checkbox3').checked;
  checkbox4 = document.getElementById('Checkbox4').checked;
  checkbox5 = document.getElementById('Checkbox5').checked;
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
  if ( checkbox5 == true ) {
  document.getElementById('checkbox5_answer').innerHTML = " True 50 is equal to 50";
  } else {
  document.getElementById('checkbox5_answer').innerHTML = "Answer?";
  }
  }

  // This coding illustrates the advanced method
  function main() {
  //console.log("It works");

  let firstNumber, secondNumber, thirdNumber, fourthNumber, fiveNumber;

  //Get the Width-value from id=textfield1
  firstNumber = document.getElementById('textfield1').value;
  //testNaN (firstNumber);
  document.getElementById('validityTest1').innerHTML = alert ( testNaN (firstNumber));
  document.getElementById('validityTest1').innerHTML = testNaN (firstNumber);


  secondNumber = document.getElementById('textfield2').value;

  document.getElementById('validityTest2').innerHTML = alert ( testNaN (secondNumber));
  document.getElementById('validityTest2').innerHTML = testNaN (secondNumber);

  //Get the Height-value from id=textfield2
  thirdNumber = document.getElementById('textfield3').value;
  //testNaN (secondNumber);
  document.getElementById('validityTest3').innerHTML = alert ( testNaN (thirdNumber));
  document.getElementById('validityTest3').innerHTML = testNaN (thirdNumber);

  fourthNumber = document.getElementById('textfield4').value;
  document.getElementById('validityTest4').innerHTML = alert ( testNaN (fourthNumber));
  document.getElementById('validityTest4').innerHTML = testNaN (fourthNumber);

  fiveNumber = document.getElementById('textfield5').value;
  document.getElementById('validityTest5').innerHTML = alert ( testNaN (fiveNumber));
  document.getElementById('validityTest5').innerHTML = testNaN (fiveNumber);

  if (stop == true) {
  document.getElementById('answer').innerHTML = "Restart the example, a width or height needs to be a number.";
  } else {
  console.log("The smallest to largest order is ", orderingThree (firstNumber, secondNumber, thirdNumber, fourthNumber, fiveNumber) );
  document.getElementById('answer').innerHTML = "The numbers " + firstNumber + ", " + secondNumber + ", " + thirdNumber +", " + fourthNumber+ ", " + fiveNumber +" in order from smallest to largets is ... \n"
  orderingThree(firstNumber, secondNumber, thirdNumber, fourthNumber, fiveNumber);
 }
 }
