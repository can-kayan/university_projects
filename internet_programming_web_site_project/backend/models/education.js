const mongoose =require('mongoose')
const educationSchema=mongoose.Schema({
    cardType:{type:String,enum:["Education","Certifica"]},
    title:{type:String},
    description:{type:String},
    date:{type:String}
},{ timestamps: true })
exports.Education=mongoose.model('Education',educationSchema);