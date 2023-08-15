const express =require("express");

const project_language_router=express.Router();

const projectLanguageController=require('../controllers/projectLanguage');

project_language_router.post('/project-language',projectLanguageController.createProjectLanguage);

project_language_router.put('/project-language/:id',projectLanguageController.updateProjectLanguage);

project_language_router.delete('/project-language/:id',projectLanguageController.deleteProjectLanguage);

module.exports=project_language_router;