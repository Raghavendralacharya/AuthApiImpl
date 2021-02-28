const mongoose = require("mongoose");

const User = mongoose.model(
  "Employee",
  new mongoose.Schema({
    empId : String,
    email: String,
    fName : String,
    lName : String,
    orgName : String
  })
);

module.exports = User;
