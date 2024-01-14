const { default: mongoose } = require("mongoose");
const errorMessages = require("../errorHandling/errorMessages");

const post=async(modelName,domainInfo)=>{
    console.log(modelName)
    const Model =mongoose.model(modelName)
    console.log(Model)
    const posts = new Model(domainInfo)
    console.log(posts)
    const postsitem = await posts.save();
    console.log(postsitem)
    if(postsitem===null){
        return 
    }
    return postsitem
}
module.exports={post}