import { GET_LINK } from '../actions'

const initialState = ''
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LINK:
      return action.payload
    default :
      return state
  }
}
