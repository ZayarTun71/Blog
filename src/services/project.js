const { paginate } = require("../utils/paginate");

const Project = require("../../models").project;
const ProjectLanguage = require("../../models").project_language;
const Language = require('../../models').language;

exports.getAllProject = async () => {
  const projectPaginate = await paginate(
    Project,
    {},
    { exclude: ["createdAt", "updatedAt"] },
    [
      {
        model: Language,
        as: 'languages',
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
    1,
    10
  );
  return projectPaginate;
};

exports.getProjectById = async (id) => {
  const project = await Project.findByPk(id);
  return project;
};

exports.createProject = async (data) => {
  const project = await Project.create({ ...data });
  return project;
};

exports.updateProject = async (id, data) => {
  const project = await Project.findByPk(id);
  const update_project = await project.update(data);
  return update_project;
};

exports.deleteProject = async (id) => {
  const project = await Project.findByPk(id);
  const delete_project = project.destroy();
  return delete_project;
};
