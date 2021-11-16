import { BASE_URL, STATUS_SUCCESS } from '../constants/api/fishTextApi';
import { FishTextResponse } from '../types/fishTextApiResponses';

export const getFishText = (
  callback: (text: string) => void,
  errorCallback?: (resp: FishTextResponse) => void,
) => {
  fetch(BASE_URL)
    .then((resp) => resp.json())
    .then((resp: FishTextResponse) => {
      resp.status === STATUS_SUCCESS ? callback(resp.text) : errorCallback && errorCallback(resp);
    }).catch((resp) => errorCallback && errorCallback(resp));
};
