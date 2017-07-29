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

  return axios.post(SERVER_URL + '/login', requestObject);
}

export const logout = () => {
  localStorage.clear();
}

export const loggedIn = () => {
  return localStorage.getItem("name");
}


export const saveData = (name, token) => {
  localStorage.setItem("name", name);
  localStorage.setItem("token", token);
}