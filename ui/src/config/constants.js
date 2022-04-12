"use strict";
/* eslint-disable */

export const HOST   = "http://localhost:3000";
export const TOKEN  = JSON.parse(localStorage.getItem("userToken"));

export const REGEX_NAME   = /^[a-zA-Z0-9.-_\s]+$/;
export const REGEX_URL    = /(https?|ftp|ssh|mailto):\/\/[a-z0-9\/:%_+.,#?!@&=-]+$/;
export const REGEX_EMAIL  = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
export const REGEX_PASS   = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,50}$/;

export const REWRITE_URL = /(^\w+:|^)\/\//;
