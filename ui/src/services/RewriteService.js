"use strict";

import { REWRITE_URL } from "../config/constants";

/**
 * REWRITE NAME
 * @param {string} name 
 * @returns 
 */
export function rewriteName(name) {

  return name.trim().charAt(0).toUpperCase() + name.trim().slice(1);
}

/**
 * REWRITE URL
 * @param {string} url
 * @returns
 */
export function rewriteUrl(url) {

  return url.trim().toLowerCase().replace(REWRITE_URL, "");
}

/**
 * REWRITE EMAIL
 * @param {string} email
 * @returns
 */
export function rewriteEmail(email) {

  return email.trim().toLowerCase();
}
