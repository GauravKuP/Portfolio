import React from 'react';
import './Projects.css';
import ContactMngrButtonComponent from "./ContactMngrUsingReact/ContactMngrButtonComponent";



function Projects(){

return(
<>
<section id='projectContainer'>
<h2 className='center'>PROJECTS</h2>
<h2 className='SubheadingPosition'>Nodejs Projects:</h2>
<div id='container'>
    <section className='inlineBlock'>
    <h2>Full-Stack</h2>
    {/* <a class='a' href="http://localhost:9000/LetsLearn" target="#"><h3>E-Learning students and Employee portal</h3></a> */}
    <a href="https://gauravkup.github.io/Contact-Manager/ " target="#"><h3 className='projectsName'>Contact Manager (HTML+NodeJs)</h3></a>
    </section>

    <section className='inlineBlock'>
        <h2>Tools</h2>
        <a href="https://gauravkup.github.io/Calculator/" target="#"><h3 className='projectsName'>Calculator</h3></a>
        <a href="https://gauravkup.github.io/Temperature-Converter/" target="#"><h3 className='projectsName'>Temperature converter</h3></a>
        <a href="https://gauravkup.github.io/Word-Counter/" target="#"><h3 className='projectsName'>Word Counter</h3></a>
    </section>

    <section className='inlineBlock'>
        <h2>Features</h2>
        <a href="https://gauravkup.github.io/Sticky-Menu-Bar/ " target="#"><h3 className='projectsName'>Sticky Menu Bar</h3></a>
        <a href="https://gauravkup.github.io/Backround-Changer/" target="#"><h3 className='projectsName'>Background Changer</h3></a>
        <a href="https://gauravkup.github.io/Photo-Slider/ " target="#"><h3 className='projectsName'>Photo Slider</h3></a>
        {/* <a href="http://localhost:2000/form" target="#"><h3>Form validation</h3></a> */}
    </section>

    </div>

    <h2 className="SubheadingPosition">React Projects:</h2>
        <br></br>
    <section id="contactMngrPosition" >
        <ContactMngrButtonComponent/>
    </section> 
    <section className='projectPosition'>
       <a href='https://gauravreactproject.netlify.app/' target='#'><h3 className='projectsName'>Clones Project</h3></a>
    </section>

    <br></br>

    
    <h2 className='SubheadingPosition'>Other projects:</h2>
    <br></br>
    <section className='projectPosition'>
        <a href='https://gauravkup.github.io/E-Commerce-WebPage/ ' target='#'><h3 className='projectsName'>E-commerce webpage</h3></a>
        <a href='https://gauravkup.github.io/E-Learning-Project-Page/  ' target='#'><h3 className='projectsName'>E-learning Webpage</h3></a>
    </section>

</section>
</>

)    

}
export default Projects;