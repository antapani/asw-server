var Hapi = require('hapi');
var server = new Hapi.Server();
libraryRequest = require('request');

server.connection({
    port: process.env.PORT || 8080
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply ('Hello World');
    }
});

server.route({
     method: 'GET',
     path: '/google',
     handler: function (request, reply) {
         libraryRequest('http://www.google.com', function(err, response, body){
             reply(body);
         });
     }
});

server.start(function(){
     console.log('~>', server.info.uri);
});
