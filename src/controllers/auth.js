const { authSchema } = require("../schema/auth");
const { loginUser } = require("../services/auth");
const {
  errorResponse,
  successResponse,
  validationErrors,
} = require("../utils/respond");
const { Validator } = require("jsonschema");
const validator = new Validator();

exports.loginUser = async (req, res, next) => {
  const startTime = Date.now();
  try {
    const data = validator.validate(req.body, authSchema);

    if (!data.valid) {
      const errors = validationErrors(data);
      // res.send(data);
      return errorResponse(req, res, 400, errors, startTime);
    }
    const user = await loginUser(data.instance);

    return successResponse(
      req,
      res,
      200,
      user,
      "login successfully",
      startTime,
      1
    );
  } catch (err) {
    return errorResponse(req, res, err.code, err.message, startTime);

  }
};
