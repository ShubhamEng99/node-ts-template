"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestController {
    testController(req, res) {
        console.log(req);
        return res.send('test');
    }
}
exports.default = TestController;
