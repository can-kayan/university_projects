
import {   useEffect, useState } from 'react';
import '../css/Card.css';
import '../css/Intern.css'
import Axios from "axios"
function Card() {
    const [rigth,setRigth]=useState('-43rem')
    const [color,setColor]=useState('#00FFFF')
    const [textShadow,setTextShadow]=useState('0px 0px 5px #4f3df0,0px 0px 5px #4f3df0,0px 0px 5px #4f3df0,0px 0px 5px #4f3df0,0px 0px 5px #4f3df0')
    const [showCard,setShowCard]=useState()
    const [displayCardName,setDisplayCardName]=useState('')
    const [experience,setExperience]=useState([])
    const [selectedProject, setSelectedProject] = useState(null);
    const [previousButton,setPreviousButton]=useState('none')
    const font=13
    const getData=async(value)=>{
        try{
            let filter =await Axios.get(`http://localhost:5000/mySite/User/${value}`)
            console.log(filter.data)
            setExperience(filter.data)
        }catch(err){
            console.log(err)
        }
    }

   
    const handleProjectClick = (index) => {
        setSelectedProject(selectedProject === index ? null : index);
    };
    const previousScrol=()=>{
        setRigth(rigth==='-43rem'?'2rem':'-43rem')
        setColor(rigth==='-43rem'?'#FF0000':'#00FFFF')
        setTextShadow(rigth==='-43rem'?'0px 0px 5px #9e0b00,0px 0px 5px #9e0b00,0px 0px 5px #9e0b00,0px 0px 5px #9e0b00,0px 0px 5px #9e0b00':'0px 0px 5px #4f3df0,0px 0px 5px #4f3df0,0px 0px 5px #4f3df0,0px 0px 5px #4f3df0,0px 0px 5px #4f3df0')
        
    }
      const selectCard=async (value)=>{
        try{
        let filter =await Axios.get(`http://localhost:5000/mySite/User/${value}`)
        
        setShowCard(<div className='exp' id='exp'>
        {filter.data.map((experience,index)=>(
               <div className='exps'key={index}>
                    <div className='cards'  >
                        <p className='cardType'>{experience.cardType}</p>
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
            </div>)
             }catch(err){
                console.log(err)
            }
        
      }
    //   useEffect(()=>{
    //     setDisplayCardName(rigth==='-43rem'?'relative':'none')
    //     setPreviousButton(rigth==='-43rem'?'none':'relative')
        
    //   },[rigth])
    //   useEffect((value)=>{
    //     selectCard(value)
    //     console.log(previousButton)
    //   },[rigth])
  return (
    <div id='Cards' style={{right:rigth}} >
        <nav >
            <li className='card-item' >
                <svg style={{position:!displayCardName}}  onClick={(e)=>{previousScrol()}} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48"><path fill="#2196F3" d="M17.1 5L14 8.1L29.9 24L14 39.9l3.1 3.1L36 24z"/></svg>
            </li>
            <li className='card-item'>
                <div className='card-button intern'  style={{color:color,textShadow:textShadow,position:displayCardName}} onClick={(e)=>{selectCard('Experience');previousScrol()}}>Experience</div>
            </li>
            <li className='card-item'>
            <div className='card-button education'  style={{color:color,textShadow:textShadow,position:displayCardName}} onClick={(e)=>{selectCard('Education');previousScrol()}}>Education</div>
            </li>
            
        </nav>
        <div>
            {showCard}
        </div>
      </div>
    
  );
}

export default Card;
