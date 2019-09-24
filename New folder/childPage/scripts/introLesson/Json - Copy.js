function simpleOperators (numberA, numberB){

  let adding = numberA + numberB;
  let subtraction = numberA - numberB;
  let mulitplying = numberA * numberB;
  let division = numberA / numberB;
  let modulus = numberA % numberB;

  console.log(numberA, numberB, 'adding', adding);
  console.log(numberA, numberB, 'subtraction', subtraction);
  console.log(numberA, numberB, 'mulitplying', mulitplying);
  console.log(numberA, numberB, 'division', division);
  console.log(numberA, numberB, 'modulus', modulus);
}

//skip count by    for   time   starting at
function skipCounting (interval, time, startingNumber){
  for (let i= 1; i <= time; i++ ){
  startingNumber = startingNumber + interval
  console.log(startingNumber);
}
}

function howManyTimes (numberStart, numberEnd, skipCount){
  while (numberStart < numberEnd) {
    console.log(numberStart += skipCount)


  }
}

function looseEquality (firstOp, secondOp) {
  console.log(firstOp == secondOp);

}

function strict(firstOp, secondOp) {
  console.log(firstOp === secondOp);
}
function customerType (points) {
  return type = points > 100 ? 'gold' : 'sliver'
}

let number =[4, 6, 10, 69, 99, 87, 5, 7, '1']

//simpleOperators(number[0], number[1]);
//simpleOperators(number[2], number[3]);
//simpleOperators(number[4], number[5]);

//skipCounting (number[0] , number[1], number[2]);
//skipCounting (number[3] , number[4], number[5]);
//howManyTimes (number[6] , number[7], number[0]);


looseEquality (number[7] , number[8]);
strict(number[7] , number[8]);
customerType (3)));
