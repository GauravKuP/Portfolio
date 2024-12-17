//add contacts:


//let [Data,setData]=useState([]);

// useEffect(()=>{
//     fetch('http://localhost:1000/api')
//     .then(res=>res.json())
//     .then(data=>{console.warn(data);setThing(thing=data.msg)})
//     .catch(err=>console.warn(err));
// })


// useEffect(()=>{
//   async function connect(){
//     //const res=await Axios.get('http://localhost:1000/showContacts');
//     const res=await fetch('http://localhost:1000/addContact');
//     //console.warn(res.data);
//     const sqlData=await res.json();
//     setData(Data=sqlData);
//     console.warn(sqlData);
//   }
//     connect();
// },[]);




//update contacts:



//axios method not working...........................................So using normal form

    // let [OldName,Setoldname]=useState('');
    // let [NewName,Setnewname]=useState('');
    // let [NewNo,Setnewnumber]=useState('');
    
//     function oldnameChange(event){
// Setoldname(oldname=event.target.value);
//     }

//     function newnameChange(event){
// Setnewname(newname=event.target.value);
//     }

//     function newnumberChange(event){
//         Setnewnumber(newnumber=event.target.value);
//     }

// function ChangeHandler(e){          //this is shortcut method for setting state.No need to write diff. handler functions.
//     if(e.target.name==='OldName')          //here 'name' is the name value given in the input tag.
//     Setoldname(OldName=e.target.value);
//     else if(e.target.name==='NewName')
//    Setnewname(NewName=e.target.value);
//     //if(e.target.name==='NewNo')
//     else
//     Setnewnumber(NewNo=e.target.value);
// }

    //let formdata={ NewName:NewName,OldName:OldName,NewNo:NewNo};
    
    // async function submitHandler(e){
    //    e.preventDefault();
          //await Axios.post("http://localhost:1000/updateContact",formdata)
        // axios({
        //     method:'post',
        //     url:'http://localhost:1000/updateContact',
        //     data:formdata,
        //     headers:{'Content-Type':'multipart/form-data'},

        // })
    //     let A=[1];
    //     axios.post("http://localhost:1000/updateContact",A)
    //       .then(res=>console.log(res))
    //    .catch(err=>console.log(err));
    // }
    
    

{/* <form onSubmit={submitHandler}>
<label>Old Name</label>
<input type="text" name="OldName" onChange={ChangeHandler} value={OldName}/>
<label>New Name</label>
<input type="text" name="NewName" onChange={ChangeHandler} value={NewName}/>
<label>New Number</label>
<input type="tel" name="NewNo" onChange={ChangeHandler} value={NewNo}/>
<button type="submit">Update</button>
</form>    */}

