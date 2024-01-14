const mongoose = require('mongoose');
const {functionGetUser,filterGetUser}=require('../../helper/middilewareReferance')
const { getUser } = require('../../helper/controllerReferance')
const errorMessages=require('../../errorHandling/errorMessages')
const filters=(value)=>{
  
  const authorizationGet=getUser.includes(value)
  return authorizationGet
}
const getAllUsers = async (req, res) => {
  if(filters(req.params.schemaToSearch)){
    const filter = {};
    Object.keys(req.query).forEach(key => {
    filter[key] = req.query[key];
    });
    await filterGetUser[req.params.schemaToSearch](req,res,filter)
    const Modeli = mongoose.model(req.params.schemaToSearch);
    const toList = await Modeli.find(filter);
    if ( toList.length === 0) {
      return res.status(400).json({ success: false, message: errorMessages.FileNotFound});
    }
    await functionGetUser[req.params.schemaToSearch](req,res,filter)
    return res.json(toList);
  }
  else{return res.status(404).json({ success: false, message: errorMessages.AccessDenied });} 
  
};

const getCountUsers = async (req, res) => {
  if(filters(req.params.modelToSearch)){
    const filter = {};
    Object.keys(req.query).forEach(key => {
      filter[key] = req.query[key];
    });
    await filterGetUser[req.params.schemaToSearch](req,res,filter)
    const Modeli = mongoose.model(req.params.modelToSearch);
    const toList = await Modeli.find(filter).countDocuments();//.populate(populateData);
    if (toList.length === 0) { 
      return res.status(400).json({ success: false, message:  errorMessages.FileNotFound});
    }
    await functionGetUser[req.params.schemaToSearch](req,res,filter)
    return res.status(200).send({[req.params.modelToSearch]:toList});
  }
  else{return res.status(404).json({ success: false, message: errorMessages.AccessDenied});} 
};


module.exports = {  getAllUsers , getCountUsers};
