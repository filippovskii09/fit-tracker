import { BASE_URL } from '../constants';
import axios from 'axios';

const PublicApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application',
  },
});

export default PublicApi;
