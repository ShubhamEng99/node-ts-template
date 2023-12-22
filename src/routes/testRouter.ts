import {Router} from "express";
import testController from "../controllers/testController";
const testRouter=Router();

testRouter.get('/',testController.testController)

export default testRouter;