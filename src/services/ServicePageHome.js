import Axios from "axios";
import { API_URL, urlGetProduct } from "api/api.js";

export const apiGetProduct = (categoryId) => {
  return new Promise((resolve, reject) => {
    Axios({
      method: "GET",
      url: API_URL + urlGetProduct + categoryId
    }).then(response => {
        resolve(response.data);
    }).catch(error => {
        reject(error);
    });
  });
};
