"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const testRouter_1 = __importDefault(require("./routes/testRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/test', testRouter_1.default);
app.listen(8000, () => {
    console.log('server is running on port 8000');
});
