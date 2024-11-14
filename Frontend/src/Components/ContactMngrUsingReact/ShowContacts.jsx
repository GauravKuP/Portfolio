import React, {useEffect, useState} from 'react';
//import './ParentComponent.css';
//import Axios from 'axios';
import ShowContactsTable from './ShowContactsTable';

function ShowContacts(){

  let [Data,setData]=useState([]);
  let [table,setTable]=useState('');

  async function connect(){
    //const res=await Axios.get('http://localhost:2000/showContacts');
    const res=await fetch('http://localhost:2000/showContacts');
    //console.warn(res.data);
    const sqlData=await res.json();
    setData(Data=sqlData);
    console.warn(sqlData);
  }

  useEffect(()=>{
 connect();
},[table]);

function Table(){
setTable(table=Data.map(x=><ShowContactsTable key={x.SLNO} x={x}/>));
}

return(
    <>
    <div class='inlineblock' id="show">
      <h2>Show Contacts</h2>
    <button onClick={()=>Table()}>Show</button>
    <table className='tableStyle'>
      <tr>
      <th>SL.No</th>
      <th>Name</th>
      <th>MobNo</th>
      </tr>
      {table}
      </table>  
    </div>
    </>
    )

}
export default ShowContacts;
