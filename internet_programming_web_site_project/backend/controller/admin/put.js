const bcrypt=require('bcrypt')
const putAdmin={
    Admin:async (req,res)=>({
        email:req.body.email,
        password:await bcrypt.hash(req.body.password,10)
    }),
    About:(req,res)=>({
        description:req.body.description,
    }),
    Contact:(req,res)=>({
        name:req.body.name,
        phone:req.body.phone,
        github:req.body.github,
        linkedin:req.body.linkedin,
        gmail:req.body.gmail
    }),
    Technologies:(req,res)=>({
        name:req.body.name,
        rate:req.body.rate
    })
}
module.exports={putAdmin}