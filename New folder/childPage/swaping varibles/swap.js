let athenaChow ={

  firstName : "athena",
  lastName : "chow",
  age : "16",
  game : "overwatch",
}

let georgeChicken ={

   firstName : "george",
   lastName : "chicken",
   age : "9",
   game : "minecraft",
}
console.log(athenaChow);
console.log(georgeChicken);

let swap = athenaChow.last;
georgeChicken.last = athenaChow.last;

console.log(athenaChow);
console.log(georgeChicken);
