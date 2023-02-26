'use strict';

module.exports.generateRandomNumber = async (event) => {
  const randomNumber = parseInt(Math.random() * 30)
  console.log(`Generating random number is ${randomNumber}`)
  return randomNumber;
};
