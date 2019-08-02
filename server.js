
// ===== DEPENDENCIES =====
const express = require("express");



// ===== EXPRESS SET UP =====
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());



// ===== ROUTES =====
// require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);



// ===== START LISTENING =====
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});