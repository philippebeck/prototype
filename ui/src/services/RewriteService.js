"use strict";
/* eslint-disable */

/**
 * REWRITE NAME
 * @param {string} name 
 * @returns 
 */
export function rewriteName(name) {
  let rewriteName = name.trim();

  return rewriteName;
}

/**
 * REWRITE URL
 * @param {string} url
 * @returns
 */
export function rewriteUrl(url) {
  let rewriteUrl = url.trim().replace(/(^\w+:|^)\/\//, "");

  return rewriteUrl;
}
