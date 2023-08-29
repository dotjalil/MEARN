const { body, validationResult } = require("express-validator");

const validatorFun = (req, res, next) => {
  // console.log(`inside the function`);
  const result = validationResult(req);
  if (!result.isEmpty()) {
    next(new Error(JSON.stringify(result.array())));
  } else {
    next();
  }
};

// const errorHandler;


module.exports = { validatorFun };