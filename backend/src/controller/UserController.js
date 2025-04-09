exports.a = (req,res)=>{
    try{
        const data = req.body;
        
        data.college = 'Sqilco';

        res.send({status:true,data:data});
    }
    catch(e){
        res.status(500).send({status:false,msg:e.message});
    }
}
exports.b = (req,res)=>{
    res.send({status:true,msg:"hello backends b api"});
}