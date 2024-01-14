const mongoose =require('mongoose')
const autopopulate=require('mongoose-autopopulate');

mongoose.plugin(autopopulate);
const technologiesSchema=mongoose.Schema({
    name:{type:String},
    rate:{type:Number,enum:[1,2,3,4,5]}
},{ timestamps: true })
exports.Technologies=mongoose.model('Technologies',technologiesSchema);