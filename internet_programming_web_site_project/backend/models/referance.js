const mongoose =require('mongoose')
const referanceSchema=mongoose.Schema({
    cardType:{type:String,enum:["Project","Github_Repository"]},
    name:{type:String},
    gmail:{type:String},
    phone:{type:String},
    Number:{type:String},
    referanceText:{type:String},
    nick:{type:String}
},{ timestamps: true })
exports.Referance=mongoose.model('Referance',referanceSchema);