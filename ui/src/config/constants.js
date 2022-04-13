"use strict";
/* eslint-disable */

export const ALERT_NAME   = "Indicate the name";
export const ALERT_TITLE  = "Indicate the subject";
export const ALERT_URL    = "Indicate the url";
export const ALERT_EMAIL  = "Indicate the email";
export const ALERT_PASS   = "Indicate the password";

export const ALERT_REGEX_NAME   = "1 to 3 words with only letters & accents";
export const ALERT_REGEX_TITLE  = "1 to 3 words with only letters & accents";
export const ALERT_REGEX_URL    = "Indicate a valid url";
export const ALERT_REGEX_EMAIL  = "Indicate a valid email";
export const ALERT_REGEX_PASS   = "8 to 50 characters including an uppercase, a lowercase & a number";

export const API_URL      = "http://localhost:3000";
export const CONTENT_TYPE = "application/json"; 
export const TOKEN        = JSON.parse(localStorage.getItem("userToken"));
export const USER_ID      = JSON.parse(localStorage.getItem("userId"));

export const REGEX_NAME   = /^[A-zÀ-ÿ].{1,30}$/;
export const REGEX_TITLE  = /^[A-zÀ-ÿ].{1,30}$/;
export const REGEX_URL    = /((https?|ftp|ssh|mailto):\/\/)?[a-z0-9\/:%_+.,#?!@&=-]+$/;
export const REGEX_EMAIL  = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
export const REGEX_PASS   = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,50}$/;

//export const REWRITE_NAME = /(?:^|\s|['`‘’.-])[^\x00-\x60^\x7B-\xDF](?!(\s|$))/;
export const REWRITE_URL  = /(^\w+:|^)\/\//;
