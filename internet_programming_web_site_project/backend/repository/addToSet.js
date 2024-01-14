const { default: mongoose } = require("mongoose");
const errorMessages = require("../errorHandling/errorMessages");

const addToSet=async(modelName,modelId,domainInfo)=>
    {
        const Model=mongoose.model(modelName)
        // console.log(Model)
        const adminitem = await Model.findByIdAndUpdate(modelId,
         {$addToSet:domainInfo},{new:true});
        //  console.log(adminitem)
            // console.log(adminitem.role)
        if(!adminitem)
            return res.json({success:false,message:errorMessages.FileContainsNoData})
        return adminitem
    }
module.exports={addToSet}