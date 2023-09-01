import express from "express";
import { isAmdin,checkPremiumAdmin } from "../middlewares/auth.js";
import { productControler } from "../controllers/products.controller.js";
export const routerProductos = express.Router();

routerProductos.get('/', productControler.getAll);

routerProductos.get("/mockingproducts", productControler.getProductsByMock);
  
routerProductos.get('/:id', productControler.getOne);

routerProductos.delete("/:id", isAmdin, productControler.delete);

routerProductos.put("/:id", isAmdin, productControler.update);

routerProductos.post("/", checkPremiumAdmin, productControler.create);

