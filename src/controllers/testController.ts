export default class TestController {
    public testController(req,res){
        console.log(req)
        return res.send('test');
    }
}