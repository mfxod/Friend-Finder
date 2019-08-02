
// ===== DEPENDENCY =====
const path = require("path");



// ===== ROUTES =====
const friends = require("../data/friends");

module.exports = function (app) {

    app.get("/friends", function (req, res) {
        res.json(friends)
    });

    app.post("/friends", function (req, res) {
        // ???.push(req.body);
        res.json(friends);
    });
}