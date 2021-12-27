import axios from "axios";

const PROXY_URL = "https://intense-mesa-62220.herokuapp.com/";
const API_URL = "https://hn.algolia.com/api/v1/search";

const countriesAPI = axios.create({
  baseURL: `${PROXY_URL}${API_URL}`,
});

export default countriesAPI;
