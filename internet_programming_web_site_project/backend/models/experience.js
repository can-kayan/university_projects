const mongoose =require('mongoose')

const experienceSchema=mongoose.Schema({
    cardType:{type:String,enum:["Intern","Work"]},
    title:{type:String},
    description:{type:String},
    date:{type:String}
},{ timestamps: true })
exports.Experience=mongoose.model('Experience',experienceSchema);