var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const session = require('express-session');
var logger = require('morgan');

// const cookieAuthMiddleware = require('./middleware/cookieAuthMiddleware');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usersRoutes');
var productsRouter = require("./routes/productsRoutes");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configuración sesión
app.use(cookieParser());
// app.use(session({secret:"secret"}))
// app.use(cookieAuthMiddleware);

// Configuración de recursos estáticos
// const publicPath = path.resolve(__dirname, './public');
// app.use(express.static(publicPath));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/productsList", productsRouter);
app.use('/products', productsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
