import axios from 'axios'

import { baseURL } from '../configuration'

const request = axios.create({
  baseURL,
  withCredentials: true
})

export default request
