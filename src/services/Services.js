import Axios from "axios";
import { API_URL, loginApi, signupApi, userApi, resetpasswordApi } from "api/api.js";

export default class Model {

    modelLogin = (user)=>{
        Axios.post(API_URL + loginApi, user)
      .then(function(response) {
        console.log(response);
          localStorage.setItem("email", user.email);
          localStorage.setItem("token", response.data.data);
          window.location.assign("./user-test");
      })
      .catch(function(error) {
        console.log(error);
      });
    };

    modelSignup = (user)=>{
        Axios.post(API_URL + signupApi, user)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    };

    modelForgotPassword = (user)=>{
      Axios.post(API_URL + resetpasswordApi, user)
      .then(function(response){
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    };
    
    modelGetUser = ()=>{
    let email = localStorage.getItem("email");
    let token = localStorage.getItem("token");
    const headers = {
      Authorization: "Bearer " + token
    };
    console.log(token);
    
    Axios({
      method: "GET",
      url: API_URL + userApi,
      headers: headers
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    }
    
}