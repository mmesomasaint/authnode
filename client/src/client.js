import axios from 'axios'

const DOMAIN = 'http://localhost:5000/api'
const CLIENT = axios.create({
  baseURL: DOMAIN,
  timeout: 20000,
  withCredentials: true,
})

export default CLIENT
