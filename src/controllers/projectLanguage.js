const {
  successResponse,
  errorResponse,
  validationErrors,
} = require("../utils/respond");

const {
  createProjectLanguage,
  updateProjectLanguage,
  deleteProjectLanguage,
} = require("../services/projectLanguage");
const { projectLanguageSchema } = require("../schema/project_language");

exports.createProjectLanguage = async (req, res, next) => {
  const startTime = Date.now();
  try {
    const validation = validator.validate(req.body, projectLanguageSchema);
    if (!validation.valid) {
      const errors = validationErrors(validation);
      return errorResponse(req, res, 400, errors, startTime);
    }

    const project_language = await createProjectLanguage(validation.instance);
    return successResponse(
      req,
      res,
      200,
      project_language,
      `project_language created successfully`,
      startTime,
      project_language.length
    );
  } catch (error) {
    return errorResponse(req, res, error.code, error.message, startTime);
  }
};

exports.updateProjectLanguage = async (req, res, next) => {
  const startTime = Date.now();
  try {
    const id = parseInt(req.params.id);

    const validation = validator.validate(req.body, projectLanguageSchema);
    if (!validation.valid) {
      const errors = validationErrors(validation);
      return errorResponse(req, res, 400, errors, startTime);
    }

    const project_language = await updateProjectLanguage(
      id,
      validation.instance
    );

    return successResponse(
      req,
      res,
      200,
      project_language,
      `project_language updated successfully`,
      startTime,
      1
    );
  } catch (error) {
    return errorResponse(req, res, error.code, error.message, startTime);
  }
};

exports.deleteProjectLanguage = async (req, res, next) => {
  const startTime = Date.now();
  try {
    const id = parseInt(req.params.id);
    const project_language = await deleteProjectLanguage(id);

    return successResponse(
      req,
      res,
      200,
      project_language,
      `project_language deleted successfully`,
      startTime,
      1
    );
  } catch (error) {
    return errorResponse(req, res, error.code, error.message, startTime);
  }
};
