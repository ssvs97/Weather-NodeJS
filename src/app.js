const express = require('express');
const path = require('path');
const router = require('./routers.js');

const port = process.env.PORT;
const app = express();
const viewsPath = path.join(__dirname,'../views');

app.use(express.static(viewsPath));
app.use(router);

app.listen(port,()=> console.log('Server is starting ...'));