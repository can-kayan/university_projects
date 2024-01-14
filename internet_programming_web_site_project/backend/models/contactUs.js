const mongoose =require('mongoose')
const autopopulate=require('mongoose-autopopulate');

mongoose.plugin(autopopulate);
const contactSchema=mongoose.Schema({
    name:{type:String},
    phone:{type:String},
    github:{type:String},
    linkedin:{type:String},
    gmail:{type:String}
},{ timestamps: true })
exports.Contact=mongoose.model('Contact',contactSchema);