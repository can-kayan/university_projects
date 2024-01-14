const express=require('express');
const router=express.Router();
const {getAllUsers,getCountUsers}=require('../helper/servicesReferance');

router.get(`/:schemaToSearch`, (req,res)=>{getAllUsers(req,res)})

module.exports=router;