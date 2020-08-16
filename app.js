var express          = require('express')
var mongoose         = require('mongoose')
var flash			 = require('connect-flash');
var bodyParser       = require("body-parser")
var methodOverride	 = require("method-override")
var passport         = require("passport")
var LocalStrategy    = require("passport-local")
var Comment          = require('/models/comment')
var Admin            = require('/models/admin')
var Class            = require('/models/class')
var emotinal_skills  = require('/models/emotional_skills')
var Social_skills    = require('/models/social_skills')
var Students         = require('/models/students')
var Teachers         = require('/models/teachers')
var app              = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));
app.use(methodOverride('_method'));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.get("/register", function(req, res){
    res.render("register"); 
 });
 //handle sign up logic
 app.post("/register", function(req, res){
     var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
         if(err){
             console.log(err);
               req.flash("error",err.message+"!!");
             return res.render("register");
         }
         passport.authenticate("local")(req, res, function(){
            req.flash("success","Hurrah,You have successfully registred and logged in as "+ req.body.username+" !!")
            res.redirect("/movies"); 
         });
     });
 });
 // show login form
 app.get("/login", function(req, res){
    res.render("login"); 
 });
 // handling login logic
 app.post("/login", passport.authenticate("local", 
 {
         successRedirect: "/profile",
         failureRedirect: "/login"
     }), function(req, res){
     
 });
 
 // logic route
 app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
 });
 
 function isLoggedIn(req, res, next){
     if(req.isAuthenticated()){
         return next();
     }
     req.flash("error","Please login to continue!!");
     res.redirect("/login");
 }
//mongodb-connection
mongoose.set("useUnifiedTopology",true);
mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb+srv://akshit:akshit%231744@cluster0-cks3q.mongodb.net/test?retryWrites=true&w=majority",{
	
	useNewUrlParser:true,
	useCreateIndex:true
});


app.listen(3000,function(){
    console.log("server has started")
  });