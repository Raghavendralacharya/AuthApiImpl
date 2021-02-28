const db = require("../models");
let common =require("../common")
let validation = common.validation;
const User = db.user;
const Employee = db.employee;


checkMandatoryParams = (req, res, next) => {

  console.log("checkMandatoryParams");
    if(validation.isEmpty(req.body.email)){
      res.status(400).send({ message: "email id is Mandatory" });
      return;
    }
    if(validation.isEmpty(req.body.fName)){
      res.status(400).send({ message: "first name is Mandatory" });
      return;
    }
    if(validation.isEmpty(req.body.lName)){
      res.status(400).send({ message: "last name is Mandatory" });
      return;
    }
    if(validation.isEmpty(req.body.empId)){
      res.status(400).send({ message: "employee id is Mandatory" });
      return;
    }
    if(validation.isEmpty(req.body.orgName)){
      res.status(400).send({ message: "organization name is Mandatory" });
      return;
    }
    if(validation.isEmpty(req.body.password)){
      res.status(400).send({ message: "password is Mandatory"});
      return;
    }
    next();
}

checkDuplicateEmpOrEmail = (req, res, next) => {
  console.log("checkDuplicateEmpOrEmail");
  // Username
  User.findOne({
    email: req.body.email
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Email is already in use!" });
      return;
    }

    // Email
    Employee.findOne({
      empId: req.body.empId
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Failed! Employee already Exist!" });
        return;
      }

      next();
    });
  });
};

const verifySignUp = {
  checkDuplicateEmpOrEmail,
  checkMandatoryParams
};

module.exports = verifySignUp;
