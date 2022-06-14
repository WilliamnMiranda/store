import axios from 'axios';
const Api = axios.create({
    baseURL: "https://api-store-application.herokuapp.com/"
  });
  
  export default Api;