const express = require("express");
const {check} = require("express-validator");

const usersController = require('../controllers/users-controllers');

const router = express.Router();


router.get("/",(req, res,next)=> {
  res.json({message:"good"})
} );

 /* router.post(
  "/signup",
  
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersController.signup
);  */

router.post("/signup" ,(req, res,next)=> {
  res.json({message:"good"})
})

router.post("/login", usersController.login);
 
module.exports = router;