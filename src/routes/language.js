const express =require("express");

const language_router=express.Router();

const languageController=require('../controllers/language');

language_router.get('/language',languageController.getAllLanguage);

// project_router.get('/project/:id',projectController.getProjectById);

language_router.post('/language',languageController.createLanguage);

// project_router.put('/project/:id',projectController.updateProject);

// project_router.delete('/project/:id',projectController.deleteProject);

module.exports=language_router;