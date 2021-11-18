import { BASE_URL } from '../constants/api/fishTextApi';

export const getFishText = () => fetch(BASE_URL)
  .then((resp) => resp.json());
