const http=require('http');
const url=require('url');
const path=require('path');
const fs=require('fs');
const { constants } = require('buffer');
const express=require('express');
const app=express();
const cors=require('cors');
const mysql=require('mysql2');


//ajs-hms projects backend code...........................................................


//const tempfile2=require('./Projects/ajs techgun projects/project-1-temperature converter'); not working. module not found problem.
//console.warn('temp file 2 is',tempfile2);

app.use(cors());

//ajs projects path................................................................
let ajsprojectpath=`${__dirname}/Projects/ajs techgun projects`;

let temppath=`${ajsprojectpath}/project-1-temperature converter`;
let tempfile=path.join(temppath,'Temperature converter.html');
console.warn('temp file path is--->',tempfile);

app.get('/temp',(req,res)=>{
    console.log('hello from projects');
    res.sendFile(tempfile);
})

let wordCfile=`${ajsprojectpath}/project-2-word counter/word counter.html`;
app.get('/wordcounter',(req,res)=>{
    res.sendFile(wordCfile);
});

let stopfile=`${ajsprojectpath}/project-7-stopwatch/stopwatch.html`;
app.get('/stopwatch',(req,res)=>{
    res.sendFile(stopfile);
});

let stickyfile=`${ajsprojectpath}/project-4-sticky menu bar/stiky menu bar.html`;
app.get('/stickymenubar',(req,res)=>{
    res.sendFile(stickyfile);
});


let background=`${ajsprojectpath}/project-3-Background changer/background changer.html`;
app.get('/backgroundchanger',(req,res)=>{
    res.sendFile(background);
});


let photofile=`${ajsprojectpath}/project-6-Photo slider/photoSlider.html`;
app.get('/photoslider',(req,res)=>{
    res.sendFile(photofile);
});


let form=`${ajsprojectpath}/project-5-form validation/form validation.html`;
app.get('/form',(req,res)=>{
    res.sendFile(form);
});


//server welcome note:

app.get('',(req,res)=>{
  res.send("Portfolio server is running fine");
})




// contact Manager backend code:...........................................................

//setting sql connection.............................................................
const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Mysql@8',
    database:'contactsproject'
  })
  
  conn.connect((err)=>{
    if(err)
    console.warn(err);
    else
    console.warn('sql database connected')
  })
  
  
  app.use(cors());       //for connecting frontend and backend
  
//   app.get('/',(req,res)=>{
   
//      res.send('hello from backend server');
//   })
  
//   app.get('/api',(req,res)=>{
    
//     res.send('hello from backend............ faddfadfadjljljljljdfjajldjfljaudifiiadiukjjjjjjjjjjjjjjjjjjjjjjkdkfkakjdslfkjlajljdflkjljdfjlkjlkljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdkasjfjalkjljfdlajjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjkjfadsssssssssssssssssssssssssssssssssjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjddddddddddddddddddddddddddddddddddddddddddddddd');
  
//   })
  
  //showing contacts......................................................................
  app.get('/showContacts',(req,res)=>{
    conn.query('SELECT * FROM contacts',(err,result)=>{
      if(err)
      res.send(err);
  else
  {res.send(result);
  console.warn(result);
  }
    })
  })
  
  
  //adding contacts:.....................................................................
  app.get('/addContact',(req,res)=>{
      
    const data={SLNo:req.query.SLNo,Name:req.query.Name,MobNo:req.query.Mob};
    //res.send(data);
    conn.query('Insert into contacts set?',data,(err,result,fields)=>{
         if(err)
         console.warn('error is',err);
        else
        {console.warn(result);res.send(`<h2>Contact Added:${result.affectedRows}</h2>`);
        }
       })
    })
  
  
    //updating contacts...................................................................
  app.get('/updateContact',(req,res)=>{
    var OldName=req.query.OldName, NewName=req.query.NewName, NewNo=req.query.NewNo;
    // var OldName=req.formdata.OldName;
    // var NewName=req.formdata.NewName;
    // var NewNo=req.formdata.NewNo;
    //  console.warn(OldName, NewName, NewNo);
     //res.send('I m update contact');
     //res.send(req.body);
  conn.query('SELECT Name FROM contacts Where Name='+ mysql.escape(OldName),(err,result)=>{
   if(err)
   res.send(`<h2>Name not found. Enter correct name<h2>`);
  
   else if(result[0].Name==OldName)
   {
       console.warn('Name Found');
       let data=[NewName,NewNo,OldName];
       let sql=`Update contacts SET Name=?,MobNo=? WHERE Name=?`;
  
       conn.query(sql,data,(err,result,fields)=>{
           if(err)  
           { res.send(`<h2>err in updating contact<h2>`);
           console.warn(err);}
            else
           { res.send(`<h2>Updated successfully</h2> \n <h2>Contacts Affected: ${result.affectedRows}</h2>`);
            
            console.warn(result);}
       })
   }
  })
  })
  
  
  //deleting contacts......................................................................
  app.get('/deleteContacts',(req,res)=>{
    conn.query('DELETE FROM contacts WHERE Name='+ mysql.escape(req.query.Name),(err,result)=>{
        if(err)
       { res.send(`error occured: ${err}`);
       console.warn(err);}
    else
    {res.send(`<h2>Deleted successfully and contacts affected: ${result.affectedRows} </h2>`);
    console.warn(result);}
    })
  })
  
  
  //searching contacts.......................................................................
  app.get('/search',(req,res)=>{
    conn.query('SELECT * FROM contacts WHERE Name='+ mysql.escape(req.query.Name),(err,result)=>{
        if(result[0]==undefined)
        {res.send('<h2>Name doesnt exist/match! Enter correct Name..</h2>'); 
        console.warn('name does not match or exists');
    }
    
       else
   {   res.send(`<h2>SLNo:${result[0].SLNO} || Name:${result[0].Name} || MobNo:${result[0].MobNo}<h2>`);
   console.warn(result);
  }
    })
  })
  
  



app.listen(2000); 