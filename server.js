var express = require("express"),
    app = express();
var ampCors = require('amp-toolbox-cors');

var port = process.env.PORT || 8080;

app.use(ampCors({ verifyOrigin: false }));
app.use(express.static(__dirname + '/public'));

app.get("/sayHello", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});

app.listen(port);
console.log("Listening on port ", port);