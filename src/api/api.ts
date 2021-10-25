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

