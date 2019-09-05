import axios from 'axios'

export class ApiError extends Error {
  constructor (name, message, payload = {}) {
    super();

    this.name = name;
    this.message = message || name;
    this.payload = payload;

    Object.setPrototypeOf(this, ApiError.prototype)
  }
}

const http = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

async function interceptResponse(response) {
  return response.data
}

async function interceptError(err) {
  throw err
}

http.interceptors.response.use(interceptResponse, interceptError)

export function get (endpoint, params = {}, headers = {}) {
  return http.get(endpoint, { params, headers })
}

export function post (endpoint, data = {}, headers = {}) {
  return http.post(endpoint, data, { headers })
}
