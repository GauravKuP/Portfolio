import React, {useState} from 'react';


function UpdateContacts(){

   return(
        <>
        <div class='inlineblock' id="update">
            <h2>Update Contacts</h2>
    <form method="get" action="http://localhost:2000/updateContact" target="_blank">
    <label>Old Name</label>
    <input type="text" name="OldName" />
    <br></br>
    <br></br>
    <label>New Name</label>
    <input type="text" name="NewName" />
    <br></br>
    <br></br>
    <label>New Number</label>
    <input type="tel" name="NewNo" />
    <br></br>
    <br></br>
    <button type="submit">Update</button>
    </form> 
    </div>  
    </>
       )
    }

    export default UpdateContacts;

    