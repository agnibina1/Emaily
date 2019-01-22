if (process.env.NODE_ENV === "production") {
  // we are in prod env. send the appropriate key

  module.exports = require("./prod");
} else {
  // we are using dev keys
  module.exports = require("./dev");
}

// Old googleClientID:
//  "1006666243084-l9hres6ese3v3pu71vvi9pb9as95nnqg.apps.googleusercontent.com",
//googleClientSecret: "pmQZ95PTGufhcAfYhIZkEmP2",

//prod cred: 645198142788-u72ont09ap9kn3pudnc3ris6301f0uoh.apps.googleusercontent.com
//private: DKLJDWiuAXBX4T4mVKGq2AsD
