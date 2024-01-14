const express=require('express');
const router=express.Router();
const {postAdmins, getAllAdmins, putAdmins, deleteAdmins}=require('../helper/servicesReferance');


router.get(`/:schemaToSearch`, (req,res)=>{getAllAdmins(req,res)})

router.post(`/:modelName`, (req,res)=>{postAdmins(req,res)})

router.put(`/:modelName`, (req,res)=>{putAdmins(req,res)})

router.delete(`/:modelName`, (req,res)=>{deleteAdmins(req,res)})


module.exports=router;