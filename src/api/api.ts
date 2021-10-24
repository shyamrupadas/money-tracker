import axios from 'axios';

export const baseUrl = 'https://peaceful-bastion-22116.herokuapp.com/api/';
export const cardsUrl = `${baseUrl}cards/`

export const getCards = async () => {
  return await axios
    .get(cardsUrl)
    .then(res => res.data);
}
