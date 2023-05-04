"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const testController_1 = __importDefault(require("../controllers/testController"));
const testRouter = (0, express_1.Router)();
const testController = new testController_1.default();
testRouter.get('/', testController.testController);
exports.default = testRouter;
