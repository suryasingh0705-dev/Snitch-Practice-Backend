import {Router} from "express"
import { addToCartValidator } from "../validators/cart.validator.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { addToCartController, getCartDetailsController } from "../controller/cart.controller.js";

const router = Router()

router.post("/", authenticate, addToCartValidator, addToCartController)

router.get("/", authenticate, getCartDetailsController)

export default router;