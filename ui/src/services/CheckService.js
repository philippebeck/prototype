"use strict";

import { REGEX_NAME, REGEX_URL, REGEX_EMAIL, REGEX_PASS } from "../config/constants";

/**
 * CHECK NAME
 * @param {string} name
 * @returns
 */
export function checkName(name) {
  if (name === "") {
    alert("Indicate the name");

  } else if (REGEX_NAME.test(name) !== true) {
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
export function checkUrl(url) {
  if (url === "") {
    alert("Indicate the url");

  } else if (REGEX_URL.test(url) !== true) {
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
export function checkEmail(email) {
  if (email === "") {
    alert("Indicate the email");

  } else if (REGEX_EMAIL.test(email) !== true) {
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
export function checkPass(pass) {
  if (pass === "") {
    alert("Indicate the password");

  } else if (REGEX_PASS.test(pass) !== true) {
    alert("8 to 50 characters including an uppercase letter, a lowercase letter and a number");

  } else {
    return true;
  }
}
