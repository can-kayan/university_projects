const express=require('express');
const router=express.Router();
const {postMail}=require('../services/mail/mail')
router.post(`/send`, (req,res)=>{postMail(req,res)})
module.exports=router;