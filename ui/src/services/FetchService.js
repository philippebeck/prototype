"mode strict";

/**
 * LIST DATA
 * @param {string} url
 * @returns
 */
export async function listData(url) {
  fetch(`http://localhost:3000${url}`, {
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
  const token = JSON.parse(localStorage.getItem("userToken"));

  fetch(`http://localhost:3000${url}`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "authorization": `Bearer ${token}`
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
  fetch(`http://localhost:3000${url}/${id}`, {
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
  const token = JSON.parse(localStorage.getItem("userToken"));

  fetch(`http://localhost:3000${url}/${id}`, {
    method: "PUT",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "authorization": `Bearer ${token}`
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
  const token = JSON.parse(localStorage.getItem("userToken"));

  fetch(`http://localhost:3000${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "authorization": `Bearer ${token}`
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
  fetch(`http://localhost:3000${url}`, {
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
