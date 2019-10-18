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


let number = [1, 20]; //Boundary Numbers
let skipCount = 1; //Number of skipCounting between each element of the sequence, used in FOR Loop
let difference = number[1] - number[0]; //Difference, mandatory expectation
let startingNumber = number[0]; //Hint: used in the FOR Loop
for (let i=0; i<=difference; i++){
even = (startingNumber += skipCount) % 2;
console.log("This number is", even, "; This iteration is number", i+skipCount); //Example of Concatenating
}
// This coding illustrates the advanced method
function main() {

  let firstNumber, secondNumber, thirdNumber, fourthNumber, fiveNumber;

  //Get the Width-value from id=textfield1
  firstNumber = document.getElementById('textfield1').value;
  //testNaN (firstNumber);
  document.getElementById('validityTest1').innerHTML = alert ( testNaN (firstNumber));
  document.getElementById('validityTest1').innerHTML = testNaN (firstNumber);

 }
