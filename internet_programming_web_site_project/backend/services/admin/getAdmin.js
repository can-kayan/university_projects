const mongoose = require('mongoose');
const { functionGetAdmin,filterGetAdmin } = require('../../helper/middilewareReferance')
const { getAdmin} = require('../../helper/controllerReferance')
const errorMessages=require('../../errorHandling/errorMessages')
const {Admin}=require('../../helper/modelsReferance')
const filters=(value)=>{
  
  const authorizationGet=getAdmin.includes(value)
  return authorizationGet
}
const getAdmins= async (req, res) => {
        const filter = {};
        Object.keys(req.query).forEach(key => {
            filter[key] = req.query[key];
        });
        const adminList = await Admin.find();
        if (!adminList) {
        return res.status(500).json({ success: false,message:errorMessages.FileNotFound });
        }
        return res.send(adminList);
}

const getAllAdmins = async (req, res) => {
    const adus=req.params.schemaToSearch
        if(filters(adus)){//domain doğrulama
            const filter = {};
            Object.keys(req.query).forEach(key => {
                filter[key] = req.query[key];
            });
            await filterGetAdmin[adus](req,res)
            const Modeli = mongoose.model(adus);
            const toList = await Modeli.find(filter);
            if (toList.length === 0) {
                return res.status(400).json({ success: false, message: errorMessages.FileNotFound });
            }
            await functionGetAdmin[adus](req,res)
            return res.status(200).send(toList);
        }else{return res.status(404).json({ success: false, message:errorMessages.AccessDenied });} 
};

const getCountAdmins = async (req, res) => {
    let adus=req.params.modelToSearch
        if(filters(adus)){//domain doğrulama
            const filter = {};
            Object.keys(req.query).forEach(key => {
                filter[key] = req.query[key];
            });
            await filterGetAdmin[adus](req,res,filter)
            const Modeli = mongoose.model(adus);
            const toList = await Modeli.find(filter).countDocuments();
            // console.log(toList)
            if (toList.length === 0) {
                return res.status(400).json({ success: false, message: errorMessages.FileNotFound});
            }
            await functionGetAdmin[adus](req,res,filter)
            return res.status(200).send({[adus]:toList});
        }else{return res.status(404).json({ success: false, message: errorMessages.AccessDenied });} 
};


module.exports = { getAllAdmins , getCountAdmins ,getAdmins};
