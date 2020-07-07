const passport = require('passport');
const strategyLocal = require('passport-local').Strategy;

passport.use('local.signup', new strategyLocal({
    usernameField: 'nombre',
    passwordField: 'contraseña',
    passReqToCallback: true
}, async (req,usernameField, passwordField, done)=>{
     console.log(req.body)
}))