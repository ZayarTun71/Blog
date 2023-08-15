const { log } = require("console");
const { where } = require("sequelize");

const ProjectLanguage = require("../../models").project_language;

exports.createProjectLanguage = async (data) => {
  if (data && Array.isArray(data.project_language)) {
    const project_language = data.project_language.map((i) => ({
      project_id: i.project_id,
      language_id: i.language_id,
    }));

    const project_language_create = await ProjectLanguage.bulkCreate(
      project_language
    );

    return project_language_create;
  }
};

exports.updateProjectLanguage = async (id, data) => {
  await ProjectLanguage.update(
    { ...data },
    {
      where: {
        id: id,
      },
      returning: true, // This option returns the updated record
    }
  );
  const updatedProjectLanguage = await ProjectLanguage.findOne({
    where: {
      id: id,
    },
  });
  return updatedProjectLanguage;
};

exports.deleteProjectLanguage = async (id) => {
  const project_language = await ProjectLanguage.findOne({
    where: {
      id: id,
    },
  });
  await project_language.destroy();
  return project_language;
};
