const express = require("express");
const app = express();
const port = 3000;


app.get('/api/v1/user', userRoute);
app.get('api/v1/admin', adminRoute);

app.listen(port, () =>{
    console.log(`server listening to port ${port}`);
})