"mode strict";

import { API_URL, CONTENT_TYPE, TOKEN } from "../config/constants";

const axios = require("axios");

axios.defaults.baseURL = API_URL;
axios.defaults.headers.post["Content-Type"] = CONTENT_TYPE;

if (TOKEN) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + TOKEN;
}

/**
 * CREATE DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
export async function createData(url, data) {
  const response = await axios.post(url, data);

  return response.data;
}

/**
 * READ DATA
 * @param {string} url 
 * @returns 
 */
export async function readData(url) {
  const response = await axios.get(url);

  return response.data;
}

/**
 * UPDATE DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
export async function updateData(url, data) {
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
