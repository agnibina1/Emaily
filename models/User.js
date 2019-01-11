const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

// This tells mongoose that a new collection needs to be created called users
//If there is an existing collection with that name mongoose tried to compare the values, but it will not overwrite it but try to create a new one.
mongoose.model("users", userSchema);
