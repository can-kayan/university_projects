const  mongoose = require("mongoose")
const errorMessages = require("../errorHandling/errorMessages")

const set=async(req,res)=>{
    const modelName=req.params.modelName
    const arrayName=req.params.arrayName
    const Model= mongoose.model(modelName)
    const filterImage=await Model.findOne({_id:req.params.modelId})
    
    const arrayfilter=filterImage[arrayName]
    const searchUpdateToImageIndex=async (arrayfilter,imageId)=>{
        const searchArray=await arrayfilter.findIndex(ids=>ids._id.toString()==imageId)
        return searchArray
    }
    const resultIndex =await searchUpdateToImageIndex(arrayfilter,req.params.arrayId)
    arrayfilter[resultIndex]=req.body
    const updateModel=async (arrayfilter,resultIndex)=>{
        
        const update=await Model.findOneAndUpdate({_id:req.params.modelId},
            {[arrayName]:arrayfilter},{new:true})
        return update
    }
    const endResult=await updateModel(arrayfilter,resultIndex)
    if(!endResult){return res.json({success:false,message:errorMessages.FileNotFound})}
    return res.send(endResult)
}
module.exports={set}