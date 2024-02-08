import express from "express";
import {registerController,loginController, forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController} from "../controllers/authController.js"
import { isAdmin, requireSignIn } from './../middleware/authMiddleware.js';

const router = express.Router();
  


// register route method POST
router.post('/register', registerController);

// login route method POST
router.post('/login', loginController);
// Forgot password route method POST

router.post("/forgot-password", forgotPasswordController);
//protected User route auth
router.get("/user-auth", requireSignIn, (req,res)=>{
    res.status(200).send({ok: true});
})
//protected admin route auth
router.get("/admin-auth", requireSignIn, isAdmin,(req,res)=>{
    res.status(200).send({ok: true});
})
 //update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;