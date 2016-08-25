var express = require('express');
var axios = require('axios');
var bodyParser = require('body-parser');
var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
var app = express();

//Config server
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', function (req, res) {
  var data = req.body;
  var link = data.link;
  // request(link, function(e, r, b){
  //   if (e) {
  //     console.error(e);
  //   }
  //   if (r.statusCode === 200) {
  //     var $ = cheerio.load(b);
  //     var relativeLinks = $("a[href^='/']");
  //     console.log("Found " + relativeLinks.length + " relative links on page");
  //     res.send("ok");
  //   }
  // })
  axios.get(link)
    .then((response)=> {
      var $ = cheerio.load(response.data);
      var videoEmbeb = $("#video-embeb");
      var title = $('.video-title').text();
      console.log(title);
      res.send({
        title: title,
        source: videoEmbeb.children().attr('src'),
      })
    })
    .catch((e)=>{
      console.log(e)
    })


})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
