require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport'); //New code for Lab 13
var LocalStrategy = require('passport-local').Strategy;

//New code added for lab 13
passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username })
  .then(function (user){
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  })
  .catch(function(err){
  return done(err)
  })
  })
 )

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var VechileRouter = require('./routes/Vechile');
var gridbuildRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var Vechile = require("./models/Vechile");
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//New code added for Lab 13
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
 }));
 app.use(passport.initialize());
 app.use(passport.session());
 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Vechile', VechileRouter);
app.use('/board', gridbuildRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);

const connectionString = process.env.MONGO_CON;
const mongoose = require('mongoose');
mongoose.connect(connectionString);

//New code added for Lab 13
// passport config
// Use the existing connection
// The Account model 
var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event 
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

// We can seed the collection if needed on server start

async function recreateDB(){
  // Delete everything
  //await Vechile.deleteMany();
  await Vechile.deleteMany({}).maxTimeMS(30000);
  let instance1 = new 
  Vechile({Vechile_model:"Audi", Vechile_year:'2023', 
  Vechile_price:10000});
  await instance1.save();
  //instance1.save( function(err,doc) {
  //if(err) return console.error(err);
  console.log("First object saved")
  //});
 
  let instance2 = new 
  Vechile({Vechile_model:"Benz", Vechile_year:'2024', 
  Vechile_price:20000});
  await instance2.save();
  //instance1.save( function(err,doc) {
  //if(err) return console.error(err);
  console.log("second object saved")
  //});
 
  let instance3 = new 
  Vechile({Vechile_model:"Jeep", Vechile_year:'2025', 
  Vechile_price:30000});
  await instance3.save();
  //instance1.save( function(err,doc) {
  //if(err) return console.error(err);
  console.log("Third object saved")
  //});
 }
 let reseed = true;
 if (reseed) { recreateDB();}

module.exports = app;
