// ************ Require's ************
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookies = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
const userLoggedMiddleware = require('./middleware/userLoggedMiddleware.js');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/usersRoutes');
const productsRouter = require('./routes/productsRoutes');
const apiUsersRouter = require('./routes/api/users');
const apiProductsRouter = require('./routes/api/products');

const cors = require('cors');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configuración sesión
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
}));

app.use(cookies());
app.use(userLoggedMiddleware);
app.use(cors());

// Configuración de recursos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/api/users', apiUsersRouter);
app.use('/api/products', apiProductsRouter);

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
