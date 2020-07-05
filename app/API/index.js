import axios from 'axios';

const BASE_URL = 'https://3tdlva3is1.execute-api.us-east-1.amazonaws.com/dev';
export const registerUser = data => {
  return axios.post(`${BASE_URL}/user`, data);
};
