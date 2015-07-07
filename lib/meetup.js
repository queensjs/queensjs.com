var request = require('request-promise');
var fs = require('fs');
var API_KEY = fs.readFileSync(__dirname + '/../data/KEY').toString().trim();

var upcoming = request({
  uri: 'https://api.meetup.com/2/events',
  method: 'GET',
  qs: {
    'group_urlname': 'queensjs',
    'key': API_KEY,
    'status': 'upcoming' 
  }
});

upcoming
  .then(console.log)
  .catch(console.error);

module.exports = {
  upcoming: upcoming
};