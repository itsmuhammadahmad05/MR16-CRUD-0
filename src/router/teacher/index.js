import { Router } from "express";
import teacherController from "../../controller/teacher/index.js";

const teacherRouter = Router();

//getting all teacher 
teacherRouter.get('/teachers', teacherController.getAll);

// // getting single teacher
teacherRouter.get('/teachers/:id', teacherController.getSingle);

// creating new teacher 
teacherRouter.post('/teachers', teacherController.create);

// // deleting record 
teacherRouter.delete('/teachers/:id', teacherController.delete);

// // updating record 
teacherRouter.put('/teachers/:id', teacherController.update);


export default teacherRouter;