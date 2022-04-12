"use strict";
/* eslint-disable */

/**
 * REWRITE NAME
 * @param {string} name 
 * @returns 
 */
export function rewriteName(name) {

  return name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();
}

/**
 * REWRITE URL
 * @param {string} url
 * @returns
 */
export function rewriteUrl(url) {

  return url.trim().replace(/(^\w+:|^)\/\//, "");
}

/**
 * REWRITE EMAIL
 * @param {string} email
 * @returns
 */
export function rewriteEmail(email) {

  return email.trim().toLowerCase();
}
