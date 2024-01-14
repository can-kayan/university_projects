

const express = require('express'); 
const app = express();
const bodyParser= require('body-parser');
const morgan = require('morgan')
const mongoose = require('mongoose');
const cors= require('cors');
require('./helper/modelsReferance')
require('dotenv/config');
require('./helper/modelsReferance')
const path = require('path');
const userRouter=require('./router/user')
const adminRouter=require('./router/admin')
const mailRouter=require('./router/mail')
const api = process.env.API_URL;
app.use(cors());
app.options('*',cors())
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(`${api}/user`,userRouter);
app.use(`${api}/admin`,adminRouter)
app.use(`${api}/mail`,mailRouter)

mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    dbName:'mySite'
})
.then(()=>{
    console.log('database connection is ready')
})
.catch((err) => { 
    console.log(err);
})
if(process.env.NODE_ENV==='sitememebro'){
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get('/',(req,res)=>
    res.sendFile(
        path.resolve(__dirname,'../','frontend','build','index.html')

    )
    )
}else {
    app.get('/',(req,res)=>res.send('please set to site'))
}
const port =process.env.PORT;
app.listen(port,()=>{
    console.log('server is running http://localhost:5000');
})
