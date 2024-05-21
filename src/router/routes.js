import studentRouter from "./student/index.js";
import teacherRouter from "./teacher/index.js";
import marksRouter from "./marks/index.js";
import salesRouter from "./sales/index.js";
import productRouter from "./sales/products.js";


const routes = [
    studentRouter,
    teacherRouter,
    marksRouter,
    salesRouter,
    productRouter
]

export default routes;