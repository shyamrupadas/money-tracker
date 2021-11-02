import axios from 'axios';
import { CardType } from '../types/types';

export const baseUrl = 'https://peaceful-bastion-22116.herokuapp.com/api/';
export const accountUrl = `${baseUrl}account/`


export const getAccounts = async () => {
  return await axios
    .get(accountUrl, {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
    .then(res => res.data);
};

export const updateCard = async (card: CardType) => {
  return await axios
    .put(accountUrl, card)
    .then(res => res.data);
};

export const deleteCard = async (id: string) => {
  return await axios
    .delete(accountUrl + id)
    .then(res => res.data);
};

export const createCard = async (card: Object) => {
  return await axios
    .post(accountUrl, card)
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
      .get(`${baseUrl}auth`,{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
      .then(res => res.data);
  }

};