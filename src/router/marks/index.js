import { Router } from "express";
import marksController from "../../controller/marks/index.js";

const marksRouter = Router();

// //getting all teacher 
marksRouter.get('/marks', marksController.getAll);

// // // getting single teacher
marksRouter.get('/marks/:id', marksController.getSingle);

// creating new teacher 
marksRouter.post('/marks', marksController.create);

// // // deleting record 
marksRouter.delete('/marks/:id', marksController.delete);

// // // updating record 
marksRouter.put('/marks/:id', marksController.update);


export default marksRouter;