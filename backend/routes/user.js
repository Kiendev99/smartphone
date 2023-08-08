const {User} = require("../models/user");
const {auth, isUser, isAdmin} = require("../middleware/auth");
const moment = require("moment");

const router = require("express").Router();

//get all users
router.get("/",isAdmin, async(req,res) => {
    try{
        const users = await User.find().sort({_id: -1});
        res.status(200).send(users);
    }catch(err){
        res.status(500).send(err);
    }
})

//Delete

router.delete("/:id", isAdmin, async(res,req) => {
    try{
        const deleteUsers = await User.findByIdAndDelete(req.params.id);
        res.status(200).send(deleteUsers);

    }catch(error){
        res.status(500).send(error);
    }
})

router.get("/find/:id", isUser, async(res,req) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).send(user);

    }catch(error){
        res.status(500).send(error);
    }
})
//update user
router.put("/:id", isUser, async(res, req) => {
    try{
        const user = await User.findById(req.params.id);
        if(!(user.email === req.body.email)){
            const emailInUse = await User.findOne({email: req.body.email});
            if(emailInUse)
            return res.status(400).send ("Email nay da duoc dc cap nhat!")
        }
    if(req.body.password && user){
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        user.password = hashedPassword;
    }
    const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            email: req.body.email,
            isAdmin: req.body.isAdmin,
            password: user.password,
        },
        {new: true}
    );
        res.status(200).send({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin,
        });
    } catch(err){
        res.status(500).send(err);
    }
}); 
module.exports = router;