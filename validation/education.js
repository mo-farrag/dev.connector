const Validator = require("validator");
const isEmpty = require("../validation/is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  //replace undefined values with empty string to be able to check it with validator.isEmpty below
  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "school is invalid";
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = "degree is required";
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "field of study is required";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "from date is required";
  }
  if (!Validator.isEmpty(data.to)) {
    if (data.from > data.to)
      errors.to = "to date should be greater than from date";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
