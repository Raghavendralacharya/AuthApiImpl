const db = require("../models");
const User = db.user;
const Employee = db.employee;
let common =require("../common")
let validation = common.validation;
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  console.log(req.query);
  // User.find()
  // let query = {
  //   $OR : [
  //     {
  //       "fName" : req.body.fName,
  //       "lName" : req.body.lName,
  //       "empId" : req.body.empId
  //     },
  //     {

  //     }
  //   ]
  //   "fName" : req.body.fName,
  //   "lName" : req.body.lName,
  //   "email" : req.body.email,
  //   "empId" : req.body.empId
  // }
  
  let query = {}

  if(!validation.isEmpty(req.query.fName)){
    query.fName = req.query.fName
  }
  if(!validation.isEmpty(req.query.lName)){
    query.lName = req.query.lName
  }
  if(!validation.isEmpty(req.query.empId)){
    query.empId = req.query.empId
  }
  
  //   "fName" : req.query.fName,
  //   "lName" : req.query.lName,
  //   "empId" : req.query.empId
  // }
  // let sort = {

  // }
  // User.findOne({
  //   email: req.body.email
  // }).exec((err, user) => {
  //   if (err) {
  //     res.status(500).send({ message: err });
  //     return;
  //   }
  Employee.find(query)
    .sort({fName: 1, lName: 1, email: 1, empId: 1, orgName :1})
    .exec((err, empData) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      console.log(JSON.stringify(empData));
      // res.status(200).send({
      //   id: user._id,
      //   email: user.email,
      //   accessToken: token
      // });
      res.status(200).send(empData);
    })
};



exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
