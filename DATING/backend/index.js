const express = require("express");
const { app, server } = require("./socket/socket");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { mongoDBConnection } = require("./middlewares/mongodobConnection");
const ErrorHandler = require("./middlewares/ErrorHandler");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const PORT = process.env.PORT || 3000;
const app2 = express();

// ----------ROUTERS---------------------------------------
const messageRouter = require("./modules/user/routes/messageRoutes");
const userRouter = require("./modules/user/routes/userRoutes");
const adminRouter = require("./modules/admin/routes/adminRoutes");
const googleRouter = require("./modules/user/routes/googleAuthRoutes");
const requestRouter = require("./modules/user/routes/requestRoutes");
const reportRouter = require("./modules/user/routes/reportRoutes");
const savedRouter = require("./modules/user/routes/savedRoutes");

// ----------SETTING MIDDLEWARES---------

app.use(cors({ credentials: true, origin: "http://localhost:5173/" }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

//-----------DB CONNECTION---------------

mongoDBConnection();

// ----------PASSPORT SETUP--------------

app.use(passport.initialize());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/api/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Use profile information to find or create user in your database
      return done(null, profile);
    }
  )
);

// ----------ROUTES----------------------

app.use("/api/user", userRouter);
app.use("/api", googleRouter);
app.use("/api/message", messageRouter);
app.use("/api/request", requestRouter);
app.use("/api/reports", reportRouter);
app.use("/api/saved", savedRouter);

// ----------ADMIN ROUTES----------------

app2.use("/api/admin", adminRouter);

// ----------ERROR HANDLER---------------

app.use(ErrorHandler);

//-----------LISTENING PORT---------------
server.listen(PORT, () => {
  console.log(`Listening port ${PORT}...`);
});
app2.listen(5500, () => {
  console.log(`Listening admin server at 5500`);
});
