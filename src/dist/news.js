const request = require('request');

module.exports = function(API_KEY, callback) {
request.get({
  url: "https://api.nytimes.com/svc/topstories/v2/home.json",
  qs: {
    'api-key': API_KEY
  },
}, function(err, response, body) {
  if (callback){
    callback(JSON.parse(body));
  }
})
}
