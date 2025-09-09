import { Router } from "express";
import { UserMiddleware } from "../../utils/UserMiddleware.js";
import { CreateAddress } from "./create-address.js";
import { EditAddressById } from "./edit-address-id.js";
import { DeleteAddressById } from "./delete-address-id.js";

const addressRouter = Router();

addressRouter.post("/create", UserMiddleware, CreateAddress);
addressRouter.patch("/edit/:id", UserMiddleware, EditAddressById);
addressRouter.delete("/delete/:id", UserMiddleware, DeleteAddressById);

export default addressRouter;
