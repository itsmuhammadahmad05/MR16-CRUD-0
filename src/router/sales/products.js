import { Router } from "express";
import productsController from "../../controller/sales/products.js";

const productRouter = Router();
productRouter.get("/Products", productsController.getAll);

productRouter.post("/Products", productsController.create);

productRouter.get("/Products/:id", productsController.getSingle);

productRouter.put("/Products/:id", productsController.update);

productRouter.delete("/Products/:id", productsController.delete);

export default productRouter;
