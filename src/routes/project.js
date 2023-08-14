const express =require("express");

const project_router=express.Router();

const projectController=require('../controllers/project');

project_router.get('/project',projectController.getAllProject);

project_router.get('/project/:id',projectController.getProjectById);

project_router.post('/project',projectController.createProject);

project_router.put('/project/:id',projectController.updateProject);

project_router.delete('/project/:id',projectController.deleteProject);

module.exports=project_router;