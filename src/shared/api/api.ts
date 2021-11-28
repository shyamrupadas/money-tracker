import axios from 'axios';
import { AccountType } from '../types/types';

export const baseUrl = 'https://peaceful-bastion-22116.herokuapp.com/api/';
export const accountUrl = `${baseUrl}account/`
const authHeader = {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}};

export const getAccounts = async () => {
  return await axios
    .get(accountUrl, authHeader)
    .then(res => res.data);
};

export const updateCard = async (card: AccountType) => {
  return await axios
    .put(accountUrl, card, authHeader)
    .then(res => res.data);
};

export const deleteCard = async (id: string) => {
  return await axios
    .delete(accountUrl + id, authHeader)
    .then(res => res.data);
};

export const createCard = async (card: Object) => {
  return await axios
    .post(accountUrl, card, authHeader)
    .then(res => res.data);
};

export const auth = {
  registration(userName: string, password: string) {
    return axios
      .post(`${baseUrl}registration`, { userName, password })
      .then(res => res.data);
  },

  login(userName: string, password: string) {
    return axios
      .post(`${baseUrl}login`, { userName, password })
      .then(res => res.data);
  },
  auth() {
    return axios
      .get(`${baseUrl}auth`, authHeader)
      .then(res => res.data);
  }

};