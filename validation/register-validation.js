const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.username = !isEmpty(data.username)
        ? data.username
        : "";

    if (Validator.isEmpty(data.username)) 
        errors.username = "Username is required";
    else if (!Validator.isLength(data.username, {min: 3,max: 30})) 
        errors.username = "Minimum length is 3";
    
    
    return {errors, isValid: isEmpty(errors)};
};