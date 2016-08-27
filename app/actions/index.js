import axios from 'axios'

export const GET_LINK = 'GET_LINK'
export const LOADED = 'LOADED'
export const ONLOAD = 'ONLOAD'

const serverURL = 'https://vtvserver.herokuapp.com/'

export function getLink(link) {
  const props = {
    link,
  }
  const request = axios.post(serverURL, props)
  return {
    type: GET_LINK,
    payload: request,
  }
}

export function onLoad() {
  const loaded = false
  return {
    type: ONLOAD,
    payload: loaded,
  }
}

export function onLoaded() {
  const loaded = true
  return {
    type: LOADED,
    payload: loaded,
  }
}
