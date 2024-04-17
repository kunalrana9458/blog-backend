const express=require("express")
const router=express.Router();

const {dummyController}=require("../controllers/dummyController")
router.get("/dummyRoute",dummyController);

module.exports = router;