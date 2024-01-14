//bottomLayer_admin
const {functionDeleteAdmin}=require('../Middleware/functions/admin/functionDeleteAdmin')
const {functionGetAdmin}=require('../Middleware/functions/admin/functionGetAdmin')
const {functionPostAdmin}=require('../Middleware/functions/admin/functionPostAdmin')
const {functionPutAdmin}=require('../Middleware/functions/admin/functionPutAdmin')
//bottomLayer_user
const {functionGetUser}=require('../Middleware/functions/user/functionGetUser')
//topLayer_admin
const {filterDeleteAdmin}=require('../Middleware/filters/admin/filterDeleteAdmin')
const {filterGetAdmin}=require('../Middleware/filters/admin/filterGetAdmin')
const {filterPostAdmin}=require('../Middleware/filters/admin/filterPostAdmin')
const {filterPutAdmin}=require('../Middleware/filters/admin/filterputAdmin')
//filter_user
const {filterGetUser}=require('../Middleware/filters/user/filterGetUser')
module.exports={
    functionDeleteAdmin,
    functionGetAdmin,
    functionPostAdmin,
    functionPutAdmin,   
    functionGetUser,  
    filterDeleteAdmin,
    filterGetAdmin,
    filterPostAdmin,   
    filterPutAdmin,   
    filterGetUser,  
}