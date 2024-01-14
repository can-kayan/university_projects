const mongoose = require('mongoose');
const { functionDeleteAdmin,filterDeleteAdmin } = require('../../helper/middilewareReferance')
const {deleteAdmin } = require('../../helper/controllerReferance')
const errorMessages=require('../../errorHandling/errorMessages')
const {Role}=require('../../helper/modelsReferance');
const { deleteMany } = require('../../repository/deleteMany');
const filters=(value)=>{ //domain doğrulama
  
  const authorizationGet=deleteAdmin.includes(value)
  return authorizationGet
}
const deleteAdmins=async(req,res)=>{
    if(filters(req.params.modelName)){
        const filter = {};
        Object.keys(req.query).forEach(key => {
            filter[key] = req.query[key];
        });
        const modelName=req.params.modelName
        await filterDeleteAdmin[req.params.modelName](req,res)
        const result =await deleteMany(modelName,filter)
        if(result.deletedCount===0)
            return res.json({success:false,message:errorMessages.FileNotFound})
        await functionDeleteAdmin[req.params.modelName](req,res)
        return res.json({success:true,message:'mission complate !'})
    } 
}
module.exports={deleteAdmins}

