const findTheOldest = (peopleArr) => {
 peopleArr.forEach((people) =>{
  people.age =  people.deathdate - people.birthdate;
  if(!people.deathdate)people.deathdate
  people.age = calculateAge(people.birthDate);

 })

};

const oldest = (peopleArr) => {
 let oldestPerson = null;

 for (let i = 0; i < peopleArr.length; i++) {
   const person = peopleArr[i];

   if (!oldestPerson || person.age > oldestPerson.age) {
     oldestPerson = person;
   }
 }

 return oldestPerson;
};


const calculateAge = (birthDate) => {
 const currentYear = new Date().getFullYear);
 const age = currentYear - birthDate;
 return age
}

// Do not edit below this line
module.exports = findTheOldest;
