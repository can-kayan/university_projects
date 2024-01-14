
const { functionPostAdmin,filterPostAdmin } = require('../../helper/middilewareReferance')
const { postAdmin} = require('../../helper/controllerReferance')
const errorMessages=require('../../errorHandling/errorMessages')
const { post } = require('../../repository/post') 
const postAdmins=async(req,res)=>{
    // try{
        const modelName=req.params.modelName
        console.log(modelName)
        const domainInfo=await postAdmin[modelName](req,res)
        console.log(domainInfo)
        if(!domainInfo){
            return res.json({success:false,message:errorMessages.Unauthorized})
        }
        await filterPostAdmin[modelName](req,res)
        console.log('geldi')
        const adminitem = await post(modelName,domainInfo)
        console.log('geldi')
        if(!adminitem)
            {
                return res.json({success:false,message:errorMessages.FileContainsNoData})
            }
        await functionPostAdmin[modelName](req,res)
        return res.send(adminitem)
    // }catch(error){
    //     return console.error(errorMessages.BadFileRequest)
    //     }
}
module.exports={postAdmins}