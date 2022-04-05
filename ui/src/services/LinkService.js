"mode strict";

const axios = require('axios');

export async function getAllLinks() {
  const response = await axios.get('/api/links');

  return response.data;
}

export async function createLink(data) {
  const response = await axios.post('/api/links', { link: data });

  return response.data;
}
