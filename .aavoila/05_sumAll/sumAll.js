const sumAll = function(number01, number02) {
 if(number01 < 0 || number02 < 0 || !(typeof number01 === "number") || !(typeof number02 === "number")) return "ERROR";

 if(number01 >= number02){
  const dummyNumber = number01;
  number01 = number02;
  number02 = dummyNumber;
 }

 let sum = 0;
 for(let i = number01; i <= number02; i++) sum += i;
 
 return sum;

};

// Do not edit below this line
module.exports = sumAll;
