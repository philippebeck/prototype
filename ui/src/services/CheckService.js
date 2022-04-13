"use strict";

import * as constants from "../config/constants";

/**
 * CHECK NAME
 * @param {string} name
 * @returns
 */
export function checkName(name) {
  if (name === "") {
    alert(constants.ALERT_NAME);

  } else if (constants.REGEX_NAME.test(name) !== true) {
    alert(constants.ALERT_REGEX_NAME);

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
    alert(constants.ALERT_URL);

  } else if (constants.REGEX_URL.test(url) !== true) {
    alert(constants.ALERT_REGEX_URL);

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
    alert(constants.ALERT_EMAIL);

  } else if (constants.REGEX_EMAIL.test(email) !== true) {
    alert(constants.ALERT_REGEX_EMAIL);

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
    alert(constants.ALERT_PASS);

  } else if (constants.REGEX_PASS.test(pass) !== true) {
    alert(constants.ALERT_REGEX_PASS);

  } else {
    return true;
  }
}
