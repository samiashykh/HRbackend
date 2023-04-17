const GoogleStrategy = require("passport-google-oauth20").Strategy;

const passport = require("passport");
require("dotenv").config();

const USER = require("./models/users");

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
},
async function(accessToken, refreshToken, profile, done) {
  try {
    const existingUser = await USER.findOne({ email: profile.emails[0].value });
    if (existingUser) {
      return done(null, existingUser);
    }
    const newUser = new USER({
      
      userName: profile.displayName,
      email: profile.emails[0].value,
      source:"Google",
      random1:"maryam",
      record1Names:"Samia",
      record1Email:"samia@gmail.com",
      record1Mobile:"1234567",
      record1Role:"MERN STACK Developer",
      record1Date:"23rd April 2021",
      record2Names:"Komal",
      record2Email:"komal@gmail.com",
      record2Mobile:"2345678",
      record2Role:"SQA Developer",
      record2Date:"13th January 2017",
      record3Names:"Maryam",
      record3Email:"maryam@gmail.com",
      record3Mobile:"3456789",
      record3Role:"HR Manager",
      record3Date:"11th October 2014",

    });
    await newUser.save();
    

    

    return done(null, newUser);

    

  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
