const express=require('express');
const router=express.Router();
const controller=require('../controllers/control');

router.get('/',controller.home);
console.log('monkey');
module.exports=router;