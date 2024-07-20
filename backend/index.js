const express = require("express");
const userRouter = require('./routes/userRoute');
const adminRouter = require('./routes/adminRoute');

const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(cors());
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter);

app.listen(port, () =>{
    console.log(`server listening to port ${port}`);
})