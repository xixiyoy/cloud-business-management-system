import axios from 'axios'

import { baseURL } from '../configuration'

const request = axios.create({
  baseURL
})

export default request
