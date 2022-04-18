"mode strict";

import { API_URL, CONTENT_TYPE, TOKEN } from "../config/constants";

const axios = require("axios");

axios.defaults.baseURL = API_URL;
axios.defaults.headers.post["Content-Type"] = CONTENT_TYPE;

if (TOKEN) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + TOKEN;
}

/**
 * GET DATA
 * @param {string} url 
 * @returns 
 */
export async function getData(url) {
  const response = await axios.get(url);

  return response.data;
}

/**
 * POST DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
export async function postData(url, data) {
  const response = await axios.post(url, data);

  return response.data;
}

/**
 * PATCH DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
export async function patchData(url, data) {
  const response = await axios.patch(url, data);

  return response.data;
}

/**
 * PUT DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
export async function putData(url, data) {
  const response = await axios.put(url, data);

  return response.data;
}

/**
 * DELETE DATA
 * @param {string} url 
 * @returns 
 */
export async function deleteData(url) {
  const response = await axios.delete(url);

  return response.data;
}
