let stop = false;

function testNaN(number){
console.log(stop);
if (isNaN (number) ) {
  stop = true;
  return "type a real number"
}else{
  return "input validated"

}
}

function main() {
 let firstNumber, secondNumber, text;

 firstNumber = document.getElementByID("textfield1").value;
document.getElementByID("validityTest1").innerHTML = alert (testNaN (firstNumber));
document.getElementByID("validityTest1").innerHTML = testNaN (firstNumber);

 firstNumber = document.getElementByID("textfield2").value;
document.getElementByID("validityTest2").innerHTML = alert (testNaN (firstNumber));
document.getElementByID("validityTest2").innerHTML = testNaN (firstNumber);

}
