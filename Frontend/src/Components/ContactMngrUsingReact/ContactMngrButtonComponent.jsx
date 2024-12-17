import { useState } from "react";
import ContactMngrParentComponent from "./ContatMngrParentComponent";

function ContactMngrButtonComponent()
{
        let [display,setDisplay]=useState(false);
        let cssObj={
            marginLeft:'9.5vw'
         
        }
        return(
            <>
            <h3 style={cssObj}>Contact Manager (ReactJs+NodeJs)</h3>
            <button style={cssObj} onClick={()=>setDisplay(display=true)}>Show</button>
            <button  onClick={()=>setDisplay(display=false)}>Hide</button>
            {display && <ContactMngrParentComponent/>}
            </>
        )
}

export default ContactMngrButtonComponent;