
import {  useEffect, useState } from 'react';
import '../css/Intern.css';
import Axios from "axios"
// import  Education  from '../js/Education';
function Intern() {
const [experience,setExperience]=useState([])
const [selectedProject, setSelectedProject] = useState(null);
const font=13
const getData=async()=>{
    try{
        let filter =await Axios.get(`http://localhost:5000/mySite/User/Experience?cardType=Intern`)
        setExperience(filter.data)
      }catch(err){
        console.log(err)
      }
}

useEffect(()=>{
    getData()
  },[])
  const handleProjectClick = (index) => {
    setSelectedProject(selectedProject === index ? null : index);
  };
  // const previousScrol=()=>{
  //   setRigth(rigth==='-39vw'?'-1vw':'-39vw')
  //   setColor(rigth==='-39vw'?'#FF0000':'#00FFFF')
  //   setTextShadow(rigth==='-39vw'?'0px 0px 5px #9e0b00,0px 0px 5px #9e0b00,0px 0px 5px #9e0b00,0px 0px 5px #9e0b00,0px 0px 5px #9e0b00':'0px 0px 5px #4f3df0,0px 0px 5px #4f3df0,0px 0px 5px #4f3df0,0px 0px 5px #4f3df0,0px 0px 5px #4f3df0')
  // }
  return (
  
      
        <div className='exp' id='exp'>
        {experience.map((experience,index)=>(
           <div className='exps'key={index}>
                <div className='cards'  >
                    {/* <p className='cardType'>{experience.cardType}</p> */}
                    <p className='title'  style={{fontSize:font+5}}>{experience.title}</p>
                    <p className='description'key={index} style={{fontSize:font}}>
                {selectedProject === index
                  ? experience.description 
                  : experience.description.slice(0, 200) + '...'}{' '}
                {experience.description.length > 200 && (
                  <span className="read-more description" onClick={(e) => {e.stopPropagation(); handleProjectClick(index)}}>
                    {selectedProject === index ? 'Hidden' : 'Show'}
                  </span>
                )}
                
                        {/* {experience.description} */}
                        </p>
                    <p className='date'>{experience.date}</p>
                </div>
                 </div>
        ))}
        </div>
    
  );
}

export default Intern;
