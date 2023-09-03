const Joi = require("joi");

const TodosPayloadSchema = Joi.object({
  title: Joi.string()
    .required(),
});

module.exports = TodosPayloadSchema;