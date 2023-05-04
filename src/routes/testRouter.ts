import {Router} from "express";
import TestController from "../controllers/testController";
const testRouter=Router();
const testController=new TestController();
testRouter.get('/',testController.testController)

export default testRouter;