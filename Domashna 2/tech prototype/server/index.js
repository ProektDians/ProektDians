const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const { urlencoded } = require('body-parser');

//DATABASE CONNECTION
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database:'proba123'
    
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
 
  //GET 5 RESTAURANTS ---------------------------------------------------------------
app.get('/api/get',(req,res)=>{
    const sqlSelect = "SELECT * from restorani  ORDER BY RAND() LIMIT 5";
    db.query(sqlSelect,(err,result)=>{

        res.send(result);
    });
});
//Get Restaurants based on serach criteria---------------------------------------------------------
app.get('/api/prezemi',(req,res)=>{
    const grad = req.query.rest;
    const terasa = req.query.rest1;
    const smoking = req.query.rest2;
    const nacinPlata =  req.query.rest3;
    const invalidiziranost = req.query.rest4;
    const internet = req.query.rest5;
    const phone = req.query.rest6;
    const nizaReq = [];
    nizaReq.push(["addrcity",grad]);
    if(terasa!=''){
         nizaReq.push(["outdoor",terasa]);
    }
   
   if(smoking!='')
    {
        nizaReq.push(["smoking",smoking]);
    }
  
    console.log(nizaReq);
    
  var nared = "SELECT * from restorani WHERE "
   for(const element of nizaReq)
   {
      nared = nared + element[0]+"='"+element[1]+"' AND "
       console.log(element[0]);
       console.log(nared.substring(0,nared.length-4));
       
   }
   var naredba =  nared.substring(0,nared.length-4);
    //const naredba = "SELECT * from proba WHERE addrcity='"+grad+"' AND outdoor='"+terasa+"' AND smoking='"+smoking+"' AND phone='"+telefon+"' AND internet='"+internet+"' AND internet='"+nacinPlata+"' AND internet='"+invalidiziranost+"' ";

    db.query(naredba,(err,result)=>{
        
                console.log(err);
        res.send(result);
    });

});


//listening on port 3001
app.listen(3001,()=>{
    console.log("running on port 3001");
});
