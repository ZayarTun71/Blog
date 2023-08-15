const { languageSchema } = require("../schema/language");
const {
  successResponse,
  errorResponse,
  validationErrors,
} = require("../utils/respond");

const { getAllLanguage, createLanguage } = require("../services/language");

const { Validator } = require("jsonschema");
const validator = new Validator();

exports.getAllLanguage = async (req, res, next) => {
  const startTime = Date.now();
  try {
    const language =await getAllLanguage();
    return successResponse(
      req,
      res,
      200,
      language,
      `Language fetched successfully`,
      startTime,
      1
    );
  } catch (error) {
    return errorResponse(req, res, error.code, error.message, startTime);
  }
};

exports.createLanguage = async (req, res, next) => {
  const startTime = Date.now();
  try {
    const validation = validator.validate(req.body, languageSchema);
    if (!validation.valid) {
      const errors = validationErrors(validation);
      return errorResponse(req, res, 400, errors, startTime);
    }

    const language = await createLanguage(validation.instance);
    return successResponse(
      req,
      res,
      200,
      language,
      `Language created successfully`,
      startTime,
      1
    );
  } catch (error) {
    return errorResponse(req, res, error.code, error.message, startTime);
  }
};
