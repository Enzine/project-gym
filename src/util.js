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

  axios.post(SERVER_URL + '/register', requestObject)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
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
      let token = response.token;

      localStorage.setItem("token", token);


    })
    .catch((error) => {

    });
}

export const logged_in = () => {
  return localStorage.getItem("token") == undefined;
}