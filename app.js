var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aerolineasRouter = require('./routes/aerolineas');
var avionRouter = require('./routes/avion');
var cronogramaRouter = require('./routes/cronograma');
var estadoRouter = require('./routes/estado');
var pasajeroRouter = require('./routes/pasajero');
var pilotoRouter = require('./routes/piloto');
var terminalRouter = require('./routes/terminal');
var ubicacionavionRouter = require('./routes/ubicacion_avion');
var ubicacionRouter = require('./routes/ubicacion');
var vueloRouter = require('./routes/vuelo');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); 
app.use('/users', usersRouter); 
app.use('/aerolineas', aerolineasRouter);// variables a ver en postman
app.use('/avion', avionRouter);
app.use('/cronograma', cronogramaRouter);
app.use('/estado', estadoRouter);
app.use('/pasajero', pasajeroRouter);
app.use('/piloto', pilotoRouter);
app.use('/terminal', terminalRouter);
app.use('/ubicacionavion', ubicacionavionRouter);
app.use('/ubicacion', ubicacionRouter);
app.use('/vuelo', vueloRouter);

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

module.exports = app;
