import jwt from 'jsonwebtoken'
import { createError } from '../utils/error.js'
import Profile from '../models/MatrimonyProfile.js'

export const verifyToken = (req,res,next)=>{
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return next(createError(401, "You are not authenticated,your token is missing"));
  }
  const token = authHeader.split(' ')[1];
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err){
            return next(createError(403,'token is not vaild')) 
        }
        console.log("user data extracted by token",user.id);
        req.user = user.id
        next()
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user === req.params.id) {
        next()
      } else {
        return next(
          createError(403, 'You are not authorized user to access this resource.')
        )
      }
    })
  }

  export const verifyProfile = (req,res,next)=>{
    verifyToken(req,res,async()=>{
      const userRefId = req.user
      const profileId = req.params.id
      console.log(userRefId);
      console.log(profileId);
      const findProfileWithUserId = await Profile.findOne({ 
        $and: [
        {userId : userRefId},
        {_id : profileId}
        ]
      })
      if(findProfileWithUserId){
        next()
      }else{
        return next(
          createError(403,'your not have authorized to perform in the matrimonyProfile ')
        )
      }
    })
  }

  
  export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next()
      } else {
        return next(
          createError(403, 'You are not an admin to perform this operation.')
        )
      }
    })
  }

  
  