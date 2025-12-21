import axios from "axios";

const instance = axios.create({
  baseURL: 'https://book-courier-server-flame.vercel.app/',
  timeout: 10000,
  headers: {'X-Custom-Header': 'foobar'}
});
export default instance;