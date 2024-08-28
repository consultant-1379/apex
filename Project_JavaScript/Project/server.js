var teams = require('./test/resources/mockJSONResponses/teams.js');

var bodyParser = require('body-parser');

module.exports = function (app) {

    app.get("/test", function (req, res) {
        res.set('Content-Type', 'application/json');
        res.send(JSON.stringify({'message' : 'Hello World'}));
    });
    
    app.get("/team", function (req, res) {
        res.set('Content-Type', 'application/json');
        res.send(JSON.stringify(teams));
    });
    
    app.post("/team", function (req, res) {
        res.set('Content-Type', 'application/json');
        console.log(req.body.message);
        res.send(JSON.stringify(req.body.team));
    });
}