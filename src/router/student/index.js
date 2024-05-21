import { Router } from "express";
import studentController from "../../controller/student/index.js";

const studentRouter= Router();

// // Getting all students
studentRouter.get('/students',studentController.getAll);

// // Getting single students
studentRouter.get('/students/:id',studentController.getSingle);

//creating new student
studentRouter.post('/students', studentController.create);

// // updating specific Student
studentRouter.put('/students/:id', studentController.update);

// // deleting single students
studentRouter.delete('/students/:id', studentController.delete);

export default studentRouter;