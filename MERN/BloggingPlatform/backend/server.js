const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//app
const app = express();

//bring routes
const blogRoutes = require('./routes/blogs');

//database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }).then(() => console.log('DB connected')).catch(err => console.log(err));

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//cors
if (process.env.NODE_ENV === 'development') {
    app.use(cors({origin: `${process.env.CLIENT_URL}`}));
}

app.use('/api',blogRoutes);


//port

const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});