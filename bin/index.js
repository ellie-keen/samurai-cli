#! /usr/bin/env node

const { generateRandomNumber } = require('../utils/generateRandomNumber');
const { samuraiQuotes } = require('./samuraiQuotes');

console.log(
  samuraiQuotes[generateRandomNumber(samuraiQuotes.length - 1)].quote
);
