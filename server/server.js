import mongoose from 'mongoose'
const express=require('express');
const app=express()
const port = 3000;
const mongoose=require('mongoose')
/* mongoose
  .connect("mongodb+srv://user:54900777@cluster0.qxhos.mongodb.net/test", {
    useNewUrlParser: true,
  })
  .then(()=>{
      console.log('connect to the databasse')
  })
  .catch((error)=>{
      console.log(error)
  }) */
app.listen(port,(error)=>{
    if(error){
        console.log(error)
    }
    console.log('server is running on port '+port)
})
console.log('hey')
//197.14.244.144
//wafi 54900777
//mongodb+srv://user:<password>@authentification.eeaes.mongodb.net/test