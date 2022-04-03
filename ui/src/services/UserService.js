"mode strict";

const axios = require('axios');

export async function getAllUsers() {
    const response = await axios.get('/api/user');

    return response.data;
}

export async function createUser(data) {
    const response = await axios.post('/api/user', { user: data });

    return response.data;
}
