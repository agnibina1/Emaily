const express = require("express");
const mongoose = require("mongoose");
//https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=1006666243084-l9hres6ese3v3pu71vvi9pb9as95nnqg.apps.googleusercontent.com
require("./models/users");
require("./services/passport");

const app = express();
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI);

app.get("/", (req, res) => {
  res.send({ hi: "we changed" });
});

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
