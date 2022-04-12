"mode strict";

import { HOST, TOKEN } from "../config/constants";

/**
 * LIST DATA
 * @param {string} url
 * @returns
 */
export async function listData(url) {
  fetch(`${HOST}${url}`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  .then((data) => { return data })
  .catch(error => console.error(error));
}

/**
 * CREATE DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
export async function createData(url, data) {

  fetch(`${HOST}${url}`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "authorization": `Bearer ${TOKEN}`
    },
    body: JSON.stringify(data)
  })
  .then((data) => { return data })
  .catch(error => console.error(error));
}

/**
 * READ DATA
 * @param {string} url 
 * @param {string} id 
 * @returns 
 */
export async function readData(url, id) {
  fetch(`${HOST}${url}/${id}`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  .then((data) => { return data })
  .catch(error => console.error(error));
}

/**
 * UPDATE DATA
 * @param {string} url 
 * @param {array} data 
 * @param {string} id 
 * @returns 
 */
export async function updateData(url, data, id) {
  fetch(`${HOST}${url}/${id}`, {
    method: "PUT",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "authorization": `Bearer ${TOKEN}`
    },
    body: JSON.stringify(data)
  })
  .then((data) => { return data })
  .catch(error => console.error(error));
}

/**
 * DELETE DATA
 * @param {string} url 
 * @param {string} id 
 * @returns 
 */
export async function deleteData(url, id) {
  fetch(`${HOST}${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "authorization": `Bearer ${TOKEN}`
    }
  })
  .then((data) => { return data })
  .catch(error => console.error(error));
}

/**
 * SEND DATA
 * @param {string} url 
 * @param {array} data 
 * @returns 
 */
export async function sendData(url, data) {
  fetch(`${HOST}${url}`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then((data) => { return data })
  .catch(error => console.error(error));
}
