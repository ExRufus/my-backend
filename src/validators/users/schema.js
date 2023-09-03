const Joi = require('joi');

const UserPayloadSchema = Joi.object({
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

module.exports = { UserPayloadSchema };