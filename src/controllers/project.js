const {
  successResponse,
  errorResponse,
  validationErrors,
} = require("../utils/respond");
const {
  createProject,
  getAllProject,
  getProjectById,
  updateProject,
  deleteProject,
} = require("../services/project");
const { projectSchema } = require("../schema/project");
const { Validator } = require("jsonschema");
const validator = new Validator();

exports.getAllProject = async (req, res, next) => {
  const startTime = Date.now();
  try {
    const project = await getAllProject();
    return successResponse(
      req,
      res,
      200,
      project,
      `Project fetched successfully`,
      startTime,
      project.length
    );
  } catch (error) {
    return errorResponse(req, res, error.code, error.message, startTime);
  }
};

exports.getProjectById = async (req, res, next) => {
  const startTime = Date.now();
  try {
    const id = parseInt(req.params.id);
    const project = await getProjectById(id);
    return successResponse(
      req,
      res,
      200,
      project,
      `Project fetched successfully`,
      startTime,
      1
    );
  } catch (error) {
    return errorResponse(req, res, error.code, error.message, startTime);
  }
};

exports.createProject = async (req, res, next) => {
  const startTime = Date.now();
  try {
    const validation = validator.validate(req.body, projectSchema);
    if (!validation.valid) {
      const errors = validationErrors(validation);
      return errorResponse(req, res, 400, errors, startTime);
    }

    const project = await createProject(validation.instance);
    return successResponse(
      req,
      res,
      200,
      project,
      `Project created successfully`,
      startTime,
      1
    );
  } catch (error) {
    return errorResponse(req, res, error.code, error.message, startTime);
  }
};

exports.updateProject = async (req, res, next) => {
  const startTime = Date.now();
  try {
    const id = parseInt(req.params.id);

    const validation = validator.validate(req.body, projectSchema);
    if (!validation.valid) {
      const errors = validationErrors(validation);
      return errorResponse(req, res, 400, errors, startTime);
    }

    const project = await updateProject(id, validation.instance);
    return successResponse(
      req,
      res,
      200,
      project,
      `Project created successfully`,
      startTime,
      1
    );
  } catch (error) {
    return errorResponse(req, res, error.code, error.message, startTime);
  }
};

exports.deleteProject = async (req, res, next) => {
  const startTime = Date.now();
  try {
    const id = parseInt(req.params.id);
    const project = await deleteProject(id);
    return successResponse(
      req,
      res,
      200,
      project,
      `Project created successfully`,
      startTime,
      1
    );
  } catch (error) {
    return errorResponse(req, res, error.code, error.message, startTime);
  }
};
