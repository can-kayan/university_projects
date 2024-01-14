const mongoose = require("mongoose");

const deleteMany=async (modelName,filter)=>{
    const mainModel = mongoose.model(modelName);
    const result =await mainModel.deleteMany(filter)
    if(result.deletedCount===0){return}
    return result
}
module.exports={deleteMany}