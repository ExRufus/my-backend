const Joi = require('joi');

const registerUserPayloadSchema = Joi.object({
  username: Joi.string()
    .pattern(/^[a-zA-Z\s]+$/)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  city: Joi.string()
    .pattern(/^[a-zA-Z\s]+$/)
    .required(),
  code: Joi.string()
    .pattern(/^[0-9]{4}$/)
    .required(),
});

const loginUserPayloadSchema = Joi.object({
  code: Joi.string()
    .pattern(/^[0-9]{4}$/)
    .required(),
});


module.exports = { registerUserPayloadSchema, loginUserPayloadSchema }