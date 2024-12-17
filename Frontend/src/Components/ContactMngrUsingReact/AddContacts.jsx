
import React, {useEffect, useState} from 'react';
//import Axios from 'axios';

function AddContacts(){

return(
    <>
    <div class='inlineblock' id="add">
      <h2>Add Contacts</h2>
         <form method="get" action="http://localhost:2000/addContact" target="_blank">
              <div>
              <label>SL_No</label>
              <input type="number" name="SLNo"/>
              </div>
              <br></br>
              <div>
               <label>Name</label>
              <input type="text" name="Name"/>
              </div>
              <br></br>
              <div>
              <label>Mob</label>
              <input type="tel" name="Mob"/>
              </div>
              <br></br>
              <button type="submit">Add</button>
            </form> 
            </div>
    </>
    )

}
export default AddContacts;