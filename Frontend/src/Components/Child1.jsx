import './Child1.css';
//import tempConvrtr from '../imports';

function Child1(){
    return(
        <>
<div className='container'>
<div className='block'>
    <h2 className='heading'>About Me:</h2>
    <ul>
    <li>got project work experiece using frontend and backend technologies</li>  
    <li>Have built some useful webapps and tools</li>  
    <li>Remain creative to try alternatives to improve performance </li>  
    <li>Got previous work experience to work in a team, handle pressure and deliver results</li>  
    </ul>
</div>

<div className='block'>
    <h2 className='heading'>Skills:</h2>
    <ul>
    <li>Programming Language: JavaScript</li>  
    <li>Web Development: HTML, CSS, JS, React-JS, Node-JS</li>  
    <li>Databases: MySQL, MongoDB</li>  
    <li>Analytical, Problem solving & Troubleshooting skills</li> 
    <li>Communication & Teamwork</li> 
    </ul>
</div>

{/* <button id='projects'> */}
<div className='block'>
    <h2 className='heading'>Projects:</h2>
    <ul>
    <li>An E-commerce website,DailySamaan.com, where people can buy anything they need</li>  
    <li>E-learning student and employee portal</li>  
    <li>Contact Manager Web App</li>
    <li>Tools:Stop Watch, Temperature convertor, Word Counter </li> 
    <li>Add on features: Sticky Menu Bar, Background Changer</li> 
    </ul>
</div>
{/* </button> */}

<div className='block'>
    <h2 className='heading'>Experience:</h2>
    <h3 className='subheading'>AMAZON | Bangalore</h3>
    <ul>
    <li>Managed catalog operations, achieved quality targets of 100% and showed rising productivity 
        scores every month</li>  
    <li>Quickly learned & adapted new business processes from time to time, proposed improvements 
        and provided technical support to team</li>  
    </ul>
</div>

</div>
</>

)
}
export default Child1;

