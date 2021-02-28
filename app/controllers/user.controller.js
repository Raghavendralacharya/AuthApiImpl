const db = require("../models");
const User = db.user;
const Employee = db.employee;
let common =require("../common")
let validation = common.validation;
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.listUser = (req, res) => {
  console.log(req.query);
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

  const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
    let pageObj ={
      "limit": limit,
      "offset": offset
    }
    return pageObj;
  };
  const page = req.query.page;
  const size = req.query.size;
  const options = {}
  if(!validation.isEmpty(size)){
    let pgObj = getPagination(page, size);
    options.offset = pgObj.offset;
    options.limit = pgObj.limit;
  }
  options.sort =  {
                    fName: 1, 
                    lName: 1, 
                    email: 1, 
                    empId: 1, 
                    orgName : 1
                  }

  Employee.paginate(query,options)
  .then((data) => {
    res.status(200).send({
      totalItems: data.totalDocs,
      empDtls: data.docs,
      totalPages: data.totalPages,
      currentPage: data.page - 1,
    });
  })
  .catch((err) => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials.",
    });
  });
};

