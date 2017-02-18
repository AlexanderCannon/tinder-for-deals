module.exports = function () {

    function getNearMe() {
        res.send(200)
    }
    function truefunc() {
        var http = require('http')

        var location = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.5033640,-0.1276250&radius=500&types=food&name=cruise&key=AIzaSyBAovukE2ey9uPSURXvP315S1Q8AsoF_Zg"
        var options = {
            host: 'https://maps.googleapis.com',
            path: 'maps/api/place/nearbysearch/json?location=51.5033640,-0.1276250&radius=500&types=food&name=cruise&key=AIzaSyBAovukE2ey9uPSURXvP315S1Q8AsoF_Zg'
        };
        callback = function (response) {
            var str = '';
            //another chunk of data has been recieved, so append it to `str`
            response.on('data', function (chunk) {
                str += chunk;
            });

            //the whole response has been recieved, so we just print it out here
            response.on('end', function () {
                res.json = str;
            });
        }
        http.request(options, callback).end();
    }
    return {
        getNearMe: getNearMe
    }
}();