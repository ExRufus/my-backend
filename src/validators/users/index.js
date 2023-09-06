const InvariantError = require('../../exceptions/InvariantError');
const { registerUserPayloadSchema, loginUserPayloadSchema } = require('./schema');

module.exports = {
  validateRegisterUserPayload: (payload) => {
    const validationResult = registerUserPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },

  validateLoginUserPayload: (payload) => {
    const validationResult = loginUserPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};
