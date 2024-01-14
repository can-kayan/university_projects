const mongoose =require('mongoose')
const autopopulate=require('mongoose-autopopulate');

mongoose.plugin(autopopulate);
const adminSchema=mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true}
},{ timestamps: true })
exports.Admin=mongoose.model('Admin',adminSchema);