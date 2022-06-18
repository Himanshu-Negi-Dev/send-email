const express = require('express');
const app = express();
const sendEmailRouter = require('./routes/sendEmail');
require("dotenv").config();
app.use(express.json());
app.use('/sendEmail/v1', sendEmailRouter);

app.get('/sendEmail/v1', (req, res)=>{
  res.send("Hello from route");
});

app.listen(3001,()=>console.log("Hello from server"));

