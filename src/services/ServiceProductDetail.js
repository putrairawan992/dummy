import Axios from "axios";
import { API_URL, urlGetProductById,dummyProductDetail } from "api/api.js";

export const apiGetProductById = productId => {
  return new Promise((resolve, reject) => {
    Axios({
      method: "GET",
      url: API_URL + urlGetProductById + productId
    }).then(response => {
        resolve(response.data);
    }).catch(error => {
        reject(error);
    });
  });
};
