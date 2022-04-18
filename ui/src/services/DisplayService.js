"use strict";

import { REWRITE_URL } from "../config/constants";

/**
 * REWRITE STRING
 * @param {string} str 
 * @returns 
 */
export function rewriteString(str) {
  switch (str) {
    case "name":
      str = str.trim().charAt(0).toUpperCase() + str.trim().slice(1);
      break;
    case "email":
      str = str.trim().toLowerCase();
      break;
    case "url":
      str = str.trim().toLowerCase().replace(REWRITE_URL, "");
      break;
    default:
      str = str.trim();
  }
  return str;
}
