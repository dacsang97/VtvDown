var str = 'http://vcplayer.vcmedia.vn/1.1/?_site=vtv&vid=vtv/pnkmw6bmbjcsz48gqf5-2svrrz3d2q/2016/08/23/2308-phim-v3-1471967798925-5eb09.mp4&_videoId=168389'
var re = /vtv\/(.*)\.mp4/i
var found = str.match(re)
console.log(found)
