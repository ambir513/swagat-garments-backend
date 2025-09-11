import { Router } from "express";
import { AdminMiddleware } from "../../utils/AdminMiddleware.js";
import uploadMiddleware from "../../utils/multer.js";
import { ProductContentAdd } from "./product-content-add.js";
import { ProductEdit } from "./product-edit.js";
import { ProductDelete } from "./product-delete.js";
import { ProductReview } from "./product-review.js";
import { UserMiddleware } from "../../utils/UserMiddleware.js";
import { ProductColorAdd } from "./product-color-add.js";
import { validateProductFieldsMiddleware } from "../../libs/validate.js";
import { ProductAddToCart } from "./product-addtocart.js";
import { ProductFav } from "./product-fav.js";

const productRouter = Router();

productRouter.post(
  "/add",
  AdminMiddleware,
  validateProductFieldsMiddleware,
  ProductContentAdd
);
productRouter.post(
  "/add/color/:id",
  AdminMiddleware,
  uploadMiddleware("product_image").array("images", 5),
  ProductColorAdd
);
productRouter.patch("/edit/:id", AdminMiddleware, ProductEdit);
productRouter.delete("/delete/:id", AdminMiddleware, ProductDelete);
productRouter.post("/review/:id", UserMiddleware, ProductReview);
productRouter.get("/fav/:id", UserMiddleware, ProductFav);
productRouter.get("/add/cart/:id", UserMiddleware, ProductAddToCart);

export default productRouter;
