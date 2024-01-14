
import { useEffect, useState } from 'react';
import '../css/Technologies.css';
import Axios from "axios"
// import 'dotenv'
function Technologies() {
  const [tecnologies,setTechnologies]=useState([])
  const getData=async()=>{
    try{
      let filter =await Axios.get(`http://localhost:5000/mySite/User/Technologies`)
      setTechnologies(filter.data)
    }catch(err){
      console.log(err)
    }
  }
  let nameArray=[]
  let index=0
  useEffect(()=>{
    getData()
    nameArray=tecnologies.map((tecnologies, index) => (
      tecnologies.name
    ))
    index=nameArray.length
    // console.log(nameArray)
  },[])
 
  return (
    <div className="technologies">
          {tecnologies.map((tecnologies,index)=>(
              <div className='card' key={index} >
                <p>{tecnologies.name} </p>
                <p>{tecnologies.rating} </p>
              </div>
          ))}
    </div>
  );
}

export default Technologies;
