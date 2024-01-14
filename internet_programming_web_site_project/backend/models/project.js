const mongoose =require('mongoose')
const projectSchema=mongoose.Schema({
    cardType:{type:String,enum:["Project","Github_Repository"]},
    title:{type:String},
    description:{type:String},
    github:{type:String},
    date:{type:String}
},{ timestamps: true })
exports.Project=mongoose.model('Project',projectSchema);