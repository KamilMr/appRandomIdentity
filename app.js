const fs = require('fs');

const maleName = [
    'Kamil', 'Rafał', 'Łukasz', 'Patryk', 'Grzegorz', 'Franek', 'Radek', 'Paweł'
];

const femaleName = [
    'Kamila', 'Ania', 'Basia', 'Kasia', 'Róża', 'Krzysztofa'
];

const lastName = [
    'Mrówka', 'Kowalik', 'Stąpor', 'Zagłoba', 'Gębala', 'Cedzidło', 'Radziwił', 'Blech', 'Gerlach', 'Herman'
];

let people = [];

const generateListOfRandomPersons = () => {
  for(let i = 1; i <= 20;) {
    const identity = {};
    identity.id = i;

    /* choose random name */
    let choosenName = [];
    let man = maleName[Math.floor(Math.random()*maleName.length)];
    let woman = femaleName[Math.floor(Math.random()*femaleName.length)];
    choosenName.push(man);
    choosenName.push(woman);
    let selectedNameHere = choosenName[Math.floor(Math.random()*choosenName.length)];
    identity.Name = selectedNameHere;

    /* choose random surname */
    let person = lastName[Math.floor(Math.random()*lastName.length)];
    identity.Surname = person;

    /* choose random age */
    const min = 18;
    const max = 78;
    let generateAge = Math.floor(Math.random()*(+max +1 - +min) + +min);
    identity.Age = generateAge;

    /* chose gender according to name */
    chooseGender = () => {
      if(maleName.includes(identity.Name)){
        return identity.Gender = 'M';
      }else if (femaleName.includes(identity.Name)) {
          return identity.Gender = 'F';
      }else {
          return console.log('This Name cannot be choose');
      }
    }
    chooseGender();

    if(people.length == 0){
      people.push(identity);
      i++
    } else if(people.length > 0){
      let valueName = people.map(function(item){ return item.Name });
      let duplicateName = valueName.some(function(item, idx){
        return valueName.indexOf(item) != idx
      });
      let valueSurname = people.map(function(item){ return item.Surname });
      let duplicateSurname = valueSurname.some(function(item, idx){
        return valueSurname.indexOf(item) != idx
      });
      if((!duplicateName) && (!duplicateSurname)){
        people.push(identity);
        i++;
      } else {
        i = i;
      }
      console.log(people);
    }
  }
}
const createFileJson = () => {
    const myobj = JSON.stringify({
        Persons: people
    });

    fs.writeFile("people.JSON", myobj, err => {
        if (err) {
            console.log(err);
        }
    });
}
generateListOfRandomPersons();
createFileJson();
