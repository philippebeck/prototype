"mode strict";

const axios = require('axios');

/**
 * LIST DATA
 * @param {string} url
 * @returns
 */
export async function listData(url) {
  const response = await axios.get(url);

  return response.data;
}

/**
 * CREATE DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
export async function createData(url, data) {
  const response = await axios.post(url, { data });

  return response.data;
}

/**
 * READ DATA
 * @param {string} url 
 * @param {string} id 
 * @returns 
 */
export async function readData(url, id) {
  const response = await axios.get(url, { id });

  return response.data;
}

/**
 * UPDATE DATA
 * @param {string} url 
 * @param {array} data 
 * @param {string} id 
 * @returns 
 */
export async function updateData(url, data, id) {
  const response = await axios.put(url, { data }, { id });

  return response.data;
}

/**
 * DELETE DATA
 * @param {string} url 
 * @param {string} id 
 * @returns 
 */
export async function deleteData(url, id) {
  const response = await axios.delete(url, { id });

  return response.data;
}
