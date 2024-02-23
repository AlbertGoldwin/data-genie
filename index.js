const bcrypt = require("bcrypt");
const _ = require("lodash");
const faker = require("faker");
const validator = require("validator");

function generateRandomString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateRandomPassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateRandomAlphanumericString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function hashPassword(password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

function comparePasswords(plainPassword, hashedPassword) {
  return bcrypt.compare(plainPassword, hashedPassword);
}

function shuffleString(string) {
  return _.shuffle(string).join("");
}

function generateFakeName() {
  return faker.name.findName();
}

function generateFakeEmail() {
  return faker.internet.email();
}

function isValidEmail(email) {
  return validator.isEmail(email);
}

module.exports = {
  generateRandomString,
  generateRandomPassword,
  generateRandomAlphanumericString,
  hashPassword,
  comparePasswords,
  shuffleString,
  generateFakeName,
  generateFakeEmail,
  isValidEmail,
};
