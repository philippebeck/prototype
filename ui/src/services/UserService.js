"mode strict";

const axios = require('axios');

export async function getAllUsers() {
  const response = await axios.get('/api/auth');

  return response.data;
}

export async function createUser(data) {
  const response = await axios.post('/api/auth/signup', { user: data });

  return response.data;
}
