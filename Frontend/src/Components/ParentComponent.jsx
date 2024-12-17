import Child1 from "./Child1";
import './ParentComponent.css';
import Projects from "./Projects";
// import NavBar from "./NavBar";

function ParentComponent(){
 
    return(
        <>
         {/* <NavBar/> */}
         {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */}
        <section className='center'>
       <h1>Welcome to my Portfolio Website</h1>
       <h2>I am Gaurav and I am a MERN stack developer</h2>
       </section>

       <section className='page'>
        <Child1/>
       </section>

       <hr></hr>

       <section>
       <Projects/>
       </section>
       
      
        </>
    )
}

export default ParentComponent;