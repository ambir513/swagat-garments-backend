import { Router } from "express";
import { AdminMiddleware } from "../../utils/AdminMiddleware.js";
import uploadMiddleware from "../../utils/multer.js";
import { ProductAdd } from "./product-add.js";
import { ProductEdit } from "./product-edit.js";
import { ProductDelete } from "./product-delete.js";
import { ProductReview } from "./product-review.js";
import { UserMiddleware } from "../../utils/UserMiddleware.js";

const productRouter = Router();

productRouter.post(
  "/add",
  AdminMiddleware,
  uploadMiddleware("product_image").array("images", 5),
  ProductAdd
);
productRouter.patch("/edit/:id", AdminMiddleware, ProductEdit);
productRouter.delete("/delete/:id", AdminMiddleware, ProductDelete);
productRouter.post("/review/:id", UserMiddleware, ProductReview);

export default productRouter;
