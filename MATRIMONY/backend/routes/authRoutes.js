import express from "express"
import passport from "passport"
import twilio from 'twilio'
import dotenv from 'dotenv'
import jwt from "jsonwebtoken"
import { AWSOTP, Login, Register, generateOTP, getIds, getUserData, logOut, otp_sent, refreshToken, verifyOTP, verify_otp } from "../controllers/authControl.js"
import {  verifyToken, verifyUser } from "../utils/verifyToken.js"
import { createError } from "../utils/error.js"

const router = express.Router()
dotenv.config()

const accoundSid = process.env.accoundSid
const authtoken = process.env.authtoken

const client = twilio(accoundSid, authtoken)
const otps = {};

router.post('/login', Login)

router.get('/refreshToken', refreshToken)

router.post('/register', Register)

router.get('/getIds', verifyToken, getIds)

router.post("/generate-otp", generateOTP);
router.post("/verify-gmail-otp", verifyOTP);


//dummy token verification
router.get('/authenticatedUserId', verifyToken, (req, res, next) => {
    console.log(req.user);
    res.status(200).json({ message: "you are authenticated", user: req.user })
})


router.get('/checkUserAuthentication/:id', verifyUser, (req, res, next) => {
    try {
        res.json({ message: "you are authenticated", user: req.user })
    } catch (error) {
        next(error)
    }

})

router.get('/checkAdminAuthentication', verifyUser, (req, res, next) => {
    try {
        res.json({ message: "you are authenticated", user: req.user })
    } catch (error) {
        next(error)
    }

})

router.get('/user/:userId',verifyUser, getUserData);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));



router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: 'http://localhost:5173/sign?error=account_does_not_exist'}),
    (req, res) => {

        console.log("user", req.user);

        const id = req.user.user._id;
        const isAdmin = req.user.user.isAdmin;
        console.log("isAdmin", isAdmin);

        const isStaff = req.user.user.isStaff;
        console.log("isStaff", isStaff);

        const user = req.user.user;
        console.log(user);

        if (user) {
            const refreshToken = jwt.sign(
                { id, isAdmin, isStaff },
                process.env.JWT,
                { expiresIn: '7d' }
            );

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: true,
                maxAge: 7 * 24 * 60 * 60 * 1000
            });

            // Redirect to homepage after setting cookie
            return res.redirect('http://localhost:5173/buddysHomePage');
        } else {
            // If user does not exist, send a 402 status with a JSON message
            return res.status(402).json({ message: "Account doesn't exist" });
        }
    }
);


router.post('/send-otp', AWSOTP)

router.post('/verify-otp', verify_otp);

router.post('/logout', logOut)

export default router;