const User = require("../models/user");
const bcrypt = require("bcryptjs");
const config = require("../config");
const jwt = require("jsonwebtoken");

class UserController {
 static async getAllUsers(req, res) {
     try {
         const info = await User.find({});
         return res.json({
             info: info
         });
    } catch (error) {
         return console.log(error);
     }
 }

 static async getUser(req, res) {
     try {
         const {id} = req.params;
         const info = await User.findOne({_id: id});
         return res.json({
             info: info
         });
     } catch (error) {
         return error;
     }
 }

 static async registerUser(req, res) {
     try {
         if(!req.body.name || !req.body.email || !req.body.password) {
             return res.json({
                 message: "Please fill in all fields"
             });
         }
         else {
            const hashed = bcrypt.hashSync(req.body.password)
             const info = await User.create(req.body);
             info.password = hashed
             await info.save()
             return res.json({
                 info: info
             });
         }
     } catch (error) {
        console.log(error)
         //return error;
     }
 }

 static async deleteUser(req, res) {
     try {
         const {id} = req.params;
         const info = await User.findOneAndDelete({_id: id});
         return res.json({
             info: info
         });
     } catch (error) {
         return error
     }
 }

 static async loginUser(req, res) {
     try {
        if(!req.body.email || !req.body.password) {
            res.status(400).json({
                message: 'Please enter your credentials'
            })
        }
        else {
            const info = await User.findOne({email:req.body.email })
            if(!info) {
                res.status(400).json({
                    message: 'Invalid email or password',
                    code: 'NOT_FOUND_ERROR'
                })
            }
            else {
                const passwordIsValid = bcrypt.compareSync(req.body.password, info.password)
                if(!passwordIsValid){
                    res.status(400).json({
                        message: 'Invalid email or password',
                        code: 'NOT_FOUND_ERROR'
                    })
                }
                
                else {
                    const token = await jwt.sign({id:info.id, email:info.email, name:info.name}, config.secret);

                    res.status(200).json({
                        message: 'successful',
                        token: token,
                        id: info.id,
                        code: 'OK'
                    });
                }
                
            }
        }
     } catch (error) {
         return error
     }
 }
}

module.exports = UserController;
