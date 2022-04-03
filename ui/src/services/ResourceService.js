"mode strict";

const axios = require('axios');

export async function getAllResources() {
  const response = await axios.get('/api/resources');

  return response.data;
}

export async function createResource(data) {
  const response = await axios.post('/api/resource', { resource: data });

  return response.data;
}
