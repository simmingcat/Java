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
 let firstNumber;
 let secondNumber;
 let text;

 firstNumber = document.getElementByID("textfield1").value;
document.getElementByID("validityTest1").innerHTML = alert (testNaN (firstNumber));
document.getElementByID("validityTest1").innerHTML = testNaN (firstNumber);

 firstNumber = document.getElementByID("textfield2").value;
document.getElementByID("validityTest2").innerHTML = alert (testNaN (firstNumber));
document.getElementByID("validityTest2").innerHTML = testNaN (firstNumber);

 if(stop == true)
 document.getElementByID("answer").innerHTML = "restart the thingy"

}else {
  console.log("the display geometry is", geometry (firstNumber, secondNumber));
  document.getElementByID('answer').innerHTML = "this display is" + geometry (firstNumber, secondNumber);

}
}
