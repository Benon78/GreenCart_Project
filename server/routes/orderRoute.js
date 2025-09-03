import e from "express";
import authUser from "../middlewares/authUser.js";
import { getAllOders, getUserOder, placeOrderCOD, placeOrderStripe } from "../controllers/orderController.js";
import authSeller from "../middlewares/authSeller.js";

const orderRouter = e.Router();

orderRouter.post('/cod', authUser, placeOrderCOD)
orderRouter.get('/user', authUser, getUserOder)
orderRouter.get('/seller', authSeller, getAllOders)
orderRouter.post('/stripe', authUser, placeOrderStripe)

export default orderRouter;