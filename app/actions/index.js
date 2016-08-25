import axios from 'axios'

export const GET_LINK = 'GET_LINK'

export function getLink(link) {
  const props = {
    link,
  }
  const request = axios.post('http://localhost:3000/', props)
  return {
    type: GET_LINK,
    payload: request,
  }
}
