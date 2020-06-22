import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.HOST}`,
});

instance.defaults.headers = {
  'Content-Type': 'application/json',
};

instance.interceptors.request.use(async (config) => {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers = { ...config.headers, authorization: `Bearer ${token}` };
    }
    return config;
  } catch (err) {
    throw Error(err);
  }
});

instance.interceptors.response.use((res) => {
  try {
    return res;
  } catch (err) {
    // Desenvolver componente de toast 
    console.log('ERRO GENERICO MAPEADO');
    throw Error(err);
  }
});

export default instance;
