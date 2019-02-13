//Root
const API_URL = "https://b6e54023.ngrok.io/";


const resetpasswordApi = "/api/v1/public/user/forgotpassword"

//Page Login
const loginApi = "api/v1/public/user/login";
const signupApi = "api/v1/public/user/register";
const userApi = "api/v1/customer";

//Page Product Detail
const urlGetProductById = "api/v1/product/";
const addToCart = "api/v1/cart/user";

//Page Home
const urlGetProduct = "api/v1/product/category/";

//Dummy
const dummyProductDetail =
  "http://localhost/dummymonggopesen/api/v1/product/product-detail.php";

export {
  API_URL,
  loginApi,
  signupApi,
  userApi,
  urlGetProductById,
  dummyProductDetail,
  urlGetProduct,
  resetpasswordApi,
  addToCart
};
