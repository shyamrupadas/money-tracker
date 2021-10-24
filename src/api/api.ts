import axios from 'axios';

export const baseUrl = 'https://enigmatic-dawn-02248.herokuapp.com/api/';
export const cardsUrl = `${baseUrl}cards/`

export const getCards = async () => {
  return await axios.get(cardsUrl).then(res => res.data);
}
