"use strict";

import { 
  ALERT_NAME, 
  ALERT_URL, 
  ALERT_EMAIL, 
  ALERT_PASS ,
  ALERT_REGEX_NAME, 
  ALERT_REGEX_URL, 
  ALERT_REGEX_EMAIL, 
  ALERT_REGEX_PASS ,
  REGEX_NAME, 
  REGEX_URL, 
  REGEX_EMAIL, 
  REGEX_PASS
} from "../config/constants";

/**
 * CHECK NAME
 * @param {string} name
 * @returns
 */
export function checkName(name) {
  if (name === "") {
    alert(ALERT_NAME);

  } else if (REGEX_NAME.test(name) !== true) {
    alert(ALERT_REGEX_NAME);

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
    alert(ALERT_URL);

  } else if (REGEX_URL.test(url) !== true) {
    alert(ALERT_REGEX_URL);

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
    alert(ALERT_EMAIL);

  } else if (REGEX_EMAIL.test(email) !== true) {
    alert(ALERT_REGEX_EMAIL);

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
    alert(ALERT_PASS);

  } else if (REGEX_PASS.test(pass) !== true) {
    alert(ALERT_REGEX_PASS);

  } else {
    return true;
  }
}
