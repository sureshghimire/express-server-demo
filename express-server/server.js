//run this server using : npm run start
// this will use the nodemon tool from the dev dependencies fo auto detecting chnages
const express = require('express');

//call the express function which provides all the features and functionality
const app = express();
const port =8888;

//create a get rout for / on localhoat: 8888
app.get('/',(req, res)=>{
    //set te header for CORS
    res.header('Access-Control-Allow-Origin','*');
    res.send('Hello World  !!');
});

//create a get route for /json on localhost: 8888
app.get('/json',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.json({message: 'express server running'});
})

app.post('/json',(req,res)=>{
    let body = '';
    req.on('data',(chunk)=>{
        body = body+chunk;
    }).on('end',()=>{
        console.log(typeof body);
        console.log(JSON.parse(body));
        res.json({message: 'express server running'});
        res.json({sucess: true})
        
    })
})

//start the server on localhoat on port 8888
app.listen(port, ()=>{
    console.log(`express Server runnig on port  ${port}`);
})