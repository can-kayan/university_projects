const mongoose =require('mongoose')
const autopopulate=require('mongoose-autopopulate');

mongoose.plugin(autopopulate);
const aboutSchema=mongoose.Schema({
    description:{type:String}
},{ timestamps: true })
exports.About=mongoose.model('About',aboutSchema);