import { GET_LINK, LOADED } from '../actions'

const initialState = {
  linkDown: 'http://vhosting.vcmedia.vn/vtv/jt-wmjo-rkiopdqhrxdpw0d6w9mirt/2016/08/24/2408-phim-toi-v3-1472054672635-7bcf4.mp4',
  source: 'https://vcplayer.vcmedia.vn/1.1/?_site=vtv&vid=vtv/jt-wmjo-rkiopdqhrxdpw0d6w9mirt/2016/08/24/2408-phim-toi-v3-1472054672635-7bcf4.mp4&_videoId=168595',
  title: 'Phim truyện: Zippo, Mù tạt và em - Tập 16',
}
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LINK: {
      const data = action.payload.data
      const title = data.title
      let source = data.source
      const re = /vtv\/(.*)\.mp4/i
      const linkDown = `http://vhosting.vcmedia.vn/${source.match(re)[0]}`
      const loaded = false
      source = source.replace('http://', 'https://')
      return { title, source, linkDown, loaded }
    }
    case LOADED: {
      return { ...state, loaded: true }
    }
    default :
      return state
  }
}
