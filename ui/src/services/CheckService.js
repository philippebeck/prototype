"use strict";

/**
 * CHECK NAME
 * @param {string} name
 * @returns
 */
export async function checkName(name) {
  const regexName = /^[a-zA-Z0-9.-_\s]+$/;

  if (name === "") {
    alert("Indicate the name");

  } else if (regexName.test(name) !== true) {
    alert("2 to 50 characters with only letters without special characters");

  } else {
    return true;
  }
}

/**
 * CHECK URL
 * @param {string} url
 * @returns
 */
export async function checkUrl(url) {
  const regexUrl  = /(https?|ftp|ssh|mailto):\/\/[a-z0-9\/:%_+.,#?!@&=-]+$/;

  if (url === "") {
    alert("Indicate the url");

  } else if (regexUrl.test(url) !== true) {
    alert("Indicate a valid url");

  } else {
    return true;
  }
}

/**
 * CHECK EMAIL
 * @param {string} email
 * @returns
 */
export async function checkEmail(email) {
  const regexEmail  = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

  if (email === "") {
    alert("Indicate the email");

  } else if (regexEmail.test(email) !== true) {
    alert("Indicate a valid email");

  } else {
    return true;
  }
}

/**
 * CHECK PASSWORD
 * @param {string} pass
 * @returns
 */
export async function checkPass(pass) {
  const regexPass   = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,50}$/;

  if (pass === "") {
    alert("Indicate the password");

  } else if (regexPass.test(pass) !== true) {
    alert("8 to 50 characters including an uppercase letter, a lowercase letter and a number");

  } else {
    return true;
  }
}
