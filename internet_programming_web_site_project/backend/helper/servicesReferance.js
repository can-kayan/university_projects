//service_admin
const {postAdmins}=require('../Services/admin/postAdmin')
const {putAdmins}=require('../Services/admin/putAdmin')
const {getAllAdmins,getCountAdmins,getAdmins}=require('../Services/admin/getAdmin')
const {deleteAdmins}=require('../Services/admin/deleteAdmin')
//service_user
const {getAllUsers,getCountUsers}=require('../Services/user/getUser')
module.exports={
    postAdmins,putAdmins,getAllAdmins,getAdmins,getCountAdmins,deleteAdmins,
   getAllUsers,getCountUsers,
   
}