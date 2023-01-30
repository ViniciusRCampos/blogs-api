const express = require('express');
const loginRoute = require('./router/loginRoute');
const userRoute = require('./router/userRoute');
const categoryRoute = require('./router/categoryRoute');
const postRoute = require('./router/postRoute');

// Vinicius Campos

// ...

const app = express();

app.use(express.json());

app.use('/', loginRoute);
app.use('/', userRoute);
app.use('/', categoryRoute);
app.use('/', postRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
