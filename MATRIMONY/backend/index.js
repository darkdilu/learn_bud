import express from "express";
import connect from "./db.js";
import dotenv from "dotenv"
import passport from "passport";
import passportSetup from './confige/passportjs.js'
import session from 'express-session';
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors"
import authRoute from "./routes/authRoutes.js"
import employeeRoute from './routes/jobPortal/employee.js'
import employerRoute from './routes/jobPortal/employer.js'
import JobSeekerRoute from './routes/jobPortal/jobSeeker.js'
import MatrimonyProfileRoute from './routes/matrimony/profile.js'
import ConversationRoutesOfMatrimony from './routes/matrimony/chat/conversation.js'
import MessageRouteOfMatrimony from './routes/matrimony/chat/message.js'
 

import morgan from "morgan"; 

 
const app = express() 

app.use(express.json());
app.use(bodyParser.json()); 
app.use(morgan('combined'));

dotenv.config()
const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

 
passportSetup(passport)   
app.use(
    session({
      secret: 'yourSecretKey21', 
      resave: false,
      saveUninitialized: false,
      cookie:{
        httpOnly:true,
        secure:false,
        maxAge:24*60*60*1000
      }
    })
  );

 
 
  app.use(cors(corsOptions));
  connect()
//routes  
app.use(cookieParser())
app.use('/api/auth',authRoute)
app.use('/api/employee',employeeRoute)
app.use('/api/employer',employerRoute)
app.use('/api/jobSeeker',JobSeekerRoute)
app.use('/api/matrimony/profile',MatrimonyProfileRoute) 
app.use('/api/matrimony/conversation',ConversationRoutesOfMatrimony)
app.use('/api/matrimony/messages',MessageRouteOfMatrimony)  

app.use((err,req,res,next)=>{ 
  const errorStatus =err.status || 500;
  const errorMessage = err.message || "Something went Wrong"
  return res.status(errorStatus).json({
      success:false,
      status:errorStatus, 
      message:errorMessage,  
      stack:err.stack
  })  
})


app.listen(8003,()=>{   
    console.log("Server is running on port 8003")
})