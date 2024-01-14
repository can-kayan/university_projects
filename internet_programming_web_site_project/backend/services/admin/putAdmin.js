const { functionPutAdmin,filterPutAdmin } = require('../../helper/middilewareReferance')
const { putAdmin } = require('../../helper/controllerReferance')
const errorMessages=require('../../errorHandling/errorMessages')
const {updateMany } = require('../../repository/put')
const putAdmins=async(req,res,next)=>{
    const filter = {};
    Object.keys(req.query).forEach(key => {
        filter[key] = req.query[key];
    });
    const modelNames=req.params.modelName
    await filterPutAdmin[modelNames](req,res)
    const updateData= await  putAdmin[modelNames](req,res);
    const result = await updateMany(modelNames,filter,updateData)
    if(result){
        await functionPutAdmin[modelNames](req,res,filter)
        res.send(result);
    }else{
        res.status(404).send(errorMessages.FileNotFound);
    }
}
module.exports={putAdmins}