import axios from 'axios';
import { CardType } from '../types/types';

export const baseUrl = 'https://peaceful-bastion-22116.herokuapp.com/api/';
export const cardsUrl = `${baseUrl}cards/`


export const getCards = async () => {
  return await axios
    .get(cardsUrl)
    .then(res => res.data);
};

export const updateCard = async (card: CardType) => {
  return await axios
    .put(cardsUrl, card)
    .then(res => res.data);
};

export const deleteCard = async (id: string) => {
  return await axios
    .delete(cardsUrl + id)
    .then(res => res.data);
};

export const createCard = async (card: Object) => {
  return await axios
    .post(cardsUrl, card)
    .then(res => res.data);
};

export const registration = async (userName: string, password: string) => {
  return await axios
    .post(`${baseUrl}registration`, { userName, password })
    .then(res => res.data);
};