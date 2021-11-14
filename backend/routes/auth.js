const router = require("express").Router()
const User = require("../models/User");
const bcrypt = require("bcrypt")



//REGISTER
router.post("/reqister" , async (req , res)=>{
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        });
        const user = await newUser.save();
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//login 
router.post("/login", async (req , res) =>{
    try{

        const user = await User.findOne({username:req.body.username})
        !user && res.status(400).json("error")

        const validate = await bcrypt.compare(req.body.password, user.password)
        !validate  && res.status(400).json("error")

        const {password , ...outhers} = user._doc ;
        res.status(200).json(outhers);

    }
    catch(err){
        res.status(500).json(err);
    }
})






module.exports = router;