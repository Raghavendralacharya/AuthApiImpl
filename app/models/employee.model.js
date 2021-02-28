const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

// const Employee = mongoose.model(
//   "Employee",
//   new mongoose.Schema({
//     empId : String,
//     email: String,
//     fName : String,
//     lName : String,
//     orgName : String
//   })
// );
let schema = mongoose.Schema(
    {
        empId : String,
        email: String,
        fName : String,
        lName : String,
        orgName : String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  schema.plugin(mongoosePaginate);

  const Employee = mongoose.model("Employee", schema);

module.exports = Employee;
