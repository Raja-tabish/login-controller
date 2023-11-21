const express=require('express')
const res = require('express/lib/response')
const router = express.Router()

router.get('/user',(req,res)=>{
      res.send('hello World')
})
router.post('/user',(req,res)=>{
      res.send('Hello world')
})

module.exports=router