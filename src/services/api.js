import axios from 'axios';

const openApi = axios.create({
  baseURL: `${
    process.env.REACT_APP_API_URL || 'https://api.diogomachado.site/'
  }v1/pub/`,
});
const closeApi = axios.create({
  baseURL: `${
    process.env.REACT_APP_API_URL || 'https://api.diogomachado.site/'
  }v1/pvt/`,
});

export default closeApi;
export { openApi, closeApi };
