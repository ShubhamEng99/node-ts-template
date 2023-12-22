class TestController {
    public testController(req,res){
        console.log(req)
        return res.send('test');
    }
}

export default new TestController();