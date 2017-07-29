import axios from 'axios';

const SERVER_URL = "http://192.168.1.239:3000"

export const register = (name, password, passwordConfirm) => {

  const requestObject = {
    user: {
      name,
      password,
      passwordConfirm
    }
  };

  return axios.post(SERVER_URL + '/register', requestObject);
}

export const login = (name, password) => {

  const requestObject = {
    user: {
      name,
      password
    }
  };

  axios.post(SERVER_URL + '/login', requestObject)
    .then((response) => {
      debugger;
      let token = response.token;
      localStorage.setItem("token", token);

      return true;

    })
    .catch((error) => {
      return error;
    });
}

export const loggedIn = () => {
  return localStorage.getItem("token") !== undefined;
}