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

function smallestToLargest (first, second) { //Notice these parameters are local and do not mix with "number" variable
  if (first == second) return 'Numbers are the same'; //must be first, return will not allow rest of code to run
  return (first < second) ? first + ', ' + second: second + ', ' + first; //ternary operator example
  //Seems odd, the inequality, here, is reading the opposite
}

// This coding illustrates the advanced method
function main() {

  let firstNumber, secondNumber;

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

   //Illustrates one example of character escapes
   console.log("In memory, \n the first number is " + firstNumber + " and \n the second number is " + secondNumber);
   document.getElementById('memory').innerHTML = "The two numbers from memory are: " + firstNumber + " & " + secondNumber;

   if (stop == true) {
     document.getElementById('answer').innerHTML = "Restart the example, a width or height needs to be a number."
   } else {
     console.log("Ordered smallest to largest: ", smallestToLargest (firstNumber, secondNumber) );
     document.getElementById('answer').innerHTML = "Ordered smallest to largest: " + smallestToLargest (firstNumber, secondNumber);
   }
 }
