var request = require('request');
var URL = 'http://localhost:8080';

var options = {
    uri: URL,
    path: '/',
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

request(options, function(err, response, body){
    if (err){
        throw err;
    }
    if (response.statusCode != 200) {
        console.log('error');
    }
    console.log(body);
});
