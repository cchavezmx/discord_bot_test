import axios from 'axios';
import config from '../config';

const credentials = `${config.api.devfAuthLogin}:${config.api.devfAuthPassword}`;
const devfapi = axios.create({
  baseURL: config.api.devf,
  headers: {
    'Content-Type': 'application/json',
    'Origin': 'http://localhost:3000',
    'Authorization': `Basic ${Buffer.from(credentials).toString('base64')}`,
  },
});

// Path: src/api/index.ts
export default devfapi