const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressJwt = require("express-jwt");
const config = require("./config");
let path = require("path");
let port = process.env.PORT || 3001;

let app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use("/account", expressJwt({secret: config.secret}));
app.use(morgan("dev"));
app.use(bodyParser());

mongoose.connect(config.database, (err) => {
    if (err) throw err;
    console.log("Connected to " + config.database)
});

app.use("/auth", require("./routes/authRoutes"));
// app.use("account", require("./routes/tripRoutes"));
app.use("/account/trips", require("./routes/tripRoutes"));

app.listen(port, () => {
    console.log("The server is listening on port " + port);
});