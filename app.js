//declaration
const express = require('express');
const bodyParser = require('body-parser');
const exSession = require('express-session');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const registration = require('./controllers/registration');
const login = require('./controllers/login');
const profile = require('./controllers/myProfile');
const logout  = require('./controllers/logout');


const app = express();


//config
app.set('view engine', 'ejs');

//middleware
app.use('/assets', express.static('assets'));
app.use(fileUpload({useTempFiles: true,tempFileDir: '/tmp/'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({secret: 'my secret value',saveUninitialized: true,resave: false}));
app.use(cookieParser());
app.use('/logout', logout);
app.use('/registration', registration);
app.use('/login', login);
app.use('/profile', profile);

// app.use('/user', user);

//route
app.get('/', (req, res) => {
    res.send('Hello from express server');
});

//server startup
app.listen(3000, (error) => {
    console.log('express server started at 3000...');
});