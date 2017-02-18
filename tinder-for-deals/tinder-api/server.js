var express = require('express');
var async = require('async');
var request = require('request');

var app = express()
// var bank = require('./routes/bluebank.js')
// var googleplaces = require('./routes/googleplaces.js')

app.get('/', function (req, res) {

    var requests = [{
        url: 'url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=53.3489,6.247950&radius=500&types=food&name=cruise&key=AIzaSyBAovukE2ey9uPSURXvP315S1Q8AsoF_Zg"',
    }, {
        url: 'https://bluebank.azure-api.net/api/v0.6.3/accounts/58a8735398d5459b278cdd34/transactions',
        headers: {
            'Bearer': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcklkIjoiNThhODczNTM5OGQ1NDU5YjI3OGNkZDMzIiwicm9sZSI6InVzZXIiLCJwcmltYXJ5U3Vic2NyaWJlcktleSI6ImM4OWE3MjRhYzI4ODRkMjU4NDhmY2M4NzdlYzQ0NjQ5IiwiaWF0IjoxNDg3NDM2MTMyfQ.tqlAF9WZzWVuOvojgEtwfwnhymdISst8GT2TFyUzJjI',
            'Ocp-Apim-Subscription-Key': 'c89a724ac2884d25848fcc877ec44649'
        }
    }];


    request.get({
        url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.5033640,-0.1276250&radius=500&types=food&name=cruise&key=AIzaSyBAovukE2ey9uPSURXvP315S1Q8AsoF_Zg"
    },
        function (error, response, geoData) {
            if (!error && response.statusCode == 200) {
                console.log("got data");
                res.json(geoData);
            }
        });
//     async.map(requests, function (obj, callback) {
//         // iterator function
//         request(obj, function (error, response, body) {
//             if (!error && response.statusCode == 200) {
//                 // transform data here or pass it on
//                 var body = JSON.parse(body);
//                 callback(null, body);
//             } else {
//                 callback(error || response.statusCode);
//             }
//         });
//     }, function (err, results) {
//         // all requests have been made
//         if (err) {
//             // handle your error
//         } else {
//             console.log(results);
//             for (var i = 0; i < results.length; i++) {
//                 // request body is results[i]
//             }
//             res.json = results;
//         }
//     });
});
//   res.json('Hello World')


app.listen(80, function () {
    console.log('Server listening on port 80')
})

function getNearMe(req, res) {
    console.log('in get maps');
    // return true
    var http = require('http')

    var location = "http://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.5033640,-0.1276250&radius=500&types=food&name=cruise&key=AIzaSyBAovukE2ey9uPSURXvP315S1Q8AsoF_Zg"
    callback = function (response) {
        var str = '';
        //another chunk of data has been recieved, so append it to `str`
        response.on('data', function (chunk) {
            str += chunk;
        });

        //the whole response has been recieved, so we just print it out here
        response.on('end', function () {
            return str;
        });
    }
    http.request(location, callback).end();
}