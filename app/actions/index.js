export const GET_LINK = 'GET_LINK'

export function getLink(link) {
  return {
    type: GET_LINK,
    payload: link,
  }
}
