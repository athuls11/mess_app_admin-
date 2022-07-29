import axios from 'axios';

export const baseUrl = 'https://my-mess-007.herokuapp.com/';

export const loginCall = (email, password) => {
  const URL = baseUrl + 'login';
  return axios(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
    },
    data: {
      email: email,
      password: password,
    },
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};