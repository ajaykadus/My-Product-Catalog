/**
 * Created by ajaykadus on 6/29/14.
 */
var express = require('express'),
    http = require('http'),
    path = require('path'),
    routes = require('./app/routes'),
    mongoose = require('mongoose'),
    app = express();

app.set('port', process.env.PORT || 3300);
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('abcdfgh'));
app.use(app.router);
app.use('/', express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

//connect to the db server:
mongoose.connect('mongodb://localhost/ProductCatalog');
mongoose.connection.on('open', function() {
    console.log("Connected to Mongoose...");
});

//routes list:
routes.initialize(app);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});
