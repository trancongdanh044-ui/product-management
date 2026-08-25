const express = require('express');
const flash = require('express-flash');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
require("dotenv").config();

const routeAdmin = require('./routes/admins/index.route');
const route = require('./routes/clients/index.route');
const database = require('./configs/database');
const systemConfig = require('./configs/system');

const startApp = async () => {
	await database.connect()
};

const app = express();
const port = process.env.PORT;

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: false}));

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

// Flash
app.use(cookieParser('JKFSKFSKJSFKSFJK'));
app.use(session({cookie: {maxAge: 60000}}));
app.use(flash());
// End Flash

app.use(express.static(`${__dirname}/public`));

//App Local variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;

//Routes
routeAdmin(app);
route(app);

startApp();
module.exports = app
