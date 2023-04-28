'use strict';

const mockData = require('./mockData.js').data;
//console.log(mockData.length)
// Your code here

const newProfile = {
  first_name: '',
  last_name: '',
  age: 0,
  gender: '',
  gender_interest: '',
  location: '',
  min_age_interest: 0,
  max_age_interest: 0
}

while (newProfile.first_name.length === 0) {
  newProfile.first_name = prompt("What's your first name?")
  if (newProfile.first_name.length > 0) { break }
}

while (newProfile.last_name.length === 0) {
  newProfile.last_name = prompt("What's your last name?")
  if (newProfile.last_name.length > 0) { break }
}

while (newProfile.age < 18) {
  newProfile.age = parseInt(prompt("What's your age?"))
  if (newProfile.age >= 18) { break }
}

while (newProfile.gender !== "M" || newProfile.gender !== "F" || newProfile.gender !== 'X') {
  newProfile.gender = prompt("What is your gender? X/M/F")
  if (newProfile.gender === "M" || newProfile.gender === "F" || newProfile.gender === 'X') { break }
}

while (newProfile.gender_interest !== "M" || newProfile.gender_interest !== "F" || newProfile.gender_interest !== 'X') {
  newProfile.gender_interest = prompt("In which gender are you interested? X/M/F")
  if (newProfile.gender_interest === "M" || newProfile.gender_interest === "F" || newProfile.gender_interest == 'X') { break }
}

while (newProfile.location !== "city" || newProfile.location !== "rural") {
  newProfile.location = prompt("What's your location? city/rural")
  if (newProfile.location === "city" || newProfile.location == "rural") { break }
}


while (newProfile.min_age_interest < 18) {
  newProfile.min_age_interest = parseInt(prompt("What's the minimum age you want your partner to have?"))

  if (newProfile.min_age_interest >= 18) { break }
}

while (newProfile.max_age_interest < newProfile.min_age_interest) {
  newProfile.max_age_interest = parseInt(prompt("What's the maximum age you want your partner to have?"))
  if (newProfile.max_age_interest > newProfile.min_age_interest) { break }
}

// console.log(newProfile)

let numberOfMatches = 0
let matchArray = []

for (let i = 0; i < mockData.length; i++) {
  if (mockData[i].min_age_interest <= newProfile.age && newProfile.age <= mockData[i].max_age_interest && newProfile.min_age_interest <= mockData[i].age && mockData[i].age <= newProfile.max_age_interest && mockData[i].gender_interest === newProfile.gender && newProfile.gender_interest === mockData[i].gender && mockData[i].location === newProfile.location) {
    let object = {
      name: `${mockData[i].first_name} ${mockData[i].last_name}`,
      age: mockData[i].age,
      location: mockData[i].location
    }
    matchArray.push(object)
    numberOfMatches++
  }
  else { continue }
}
console.log(`You have ${numberOfMatches} matches.`)
console.log("This are your matches:")
console.log(matchArray)
//test