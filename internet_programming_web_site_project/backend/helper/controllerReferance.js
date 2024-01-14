//controller_admin
const {deleteAdmin}=require('../controller/admin/delete')
const {getAdmin}=require('../controller/admin/get')
const {postAdmin}=require('../controller/admin/post')
const {putAdmin}=require('../controller/admin/put')
//controller_user
const {getUser}=require('../controller/user/get')

module.exports={
    deleteAdmin,getAdmin,postAdmin,
    putAdmin,
    getUser

}