
import {  useState } from 'react';
import '../css/App.css';
import Mail from './Mail.js';
import Technologies from './Technologies.js';

function Const() {
    const[transformOne,setTransformOne]=useState('rotateY(0deg)')
    const [transformTwo,setTransformTwo]=useState('rotateY(-180deg)')
    const handleClick = () => {
      setTransformOne(transformOne==='rotateY(-180deg)'?'rotateY(0deg)':'rotateY(-180deg)')
      setTransformTwo(transformTwo==='rotateY(0deg)'?'rotateY(-180deg)':'rotateY(0deg)')
    }
  return (
    <div className="App">
          <div className='contact wr'>
            <div className='contact_button name_phone' ><p>Mehmet Can Kayan</p></div>
            <a href='https://linkedin.com/in/can-kayan' className='contact_button'>
              
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128">
                  <path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3z"/>
                  <path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/>
                </svg>
                
              
            </a>
            <a href='https://github.com/Cank01' className='contact_button'>
                 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
            </a>
            <div className='contact_button' onClick={handleClick}>
               
                <svg className='one' style={{transform:transformOne}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 193">
                  <path fill="#4285F4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z"/>
                  <path fill="#34A853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798v98.91Z"/>
                  <path fill="#EA4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"/>
                  <path fill="#FBBC04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218Z"/>
                  <path fill="#C5221F" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273Z"/>
               
                </svg>
                <svg className='two' style={{transform:transformTwo,left:'35%',top:'3px',bottom:'auto',width:'30px',}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.427 16.615v-6.042c0-.997-.444-1.669-1.541-1.669c-.906 0-1.754.614-2.159 1.228v6.483H5.704v-6.042c0-.997-.423-1.669-1.523-1.669c-.905 0-1.734.633-2.158 1.228v6.483H0V7.351h2.023v1.247C2.428 8.04 3.642 7.12 5.068 7.12c1.386 0 2.235.69 2.543 1.688c.52-.825 1.754-1.688 3.16-1.688c1.697 0 2.68.92 2.68 2.8v6.694h-2.024zM24 12.163c0-2.925-1.788-5.042-4.604-5.042c-2.777 0-4.759 2.174-4.759 4.869c0 2.945 2.079 4.888 4.913 4.89c1.476 0 2.855-.482 3.807-1.368l-.932-1.328c-.68.673-1.747 1.04-2.68 1.04c-1.768 0-2.815-1.174-2.971-2.56H24v-.5zm-7.245-.943c.077-1.116.893-2.444 2.622-2.444c1.845 0 2.602 1.347 2.66 2.444h-5.282z"/></svg>
               
            </div>
            
          </div>
          <div className='container' style={{position:'relative',width:'50vw',transition:'1s',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div className='one About wr' style={{transform:transformOne}}> 
              <div className='p'>
              <p className='wrap'>Hello! My name is Mehmet Can. In addition to my experience in developing web projects using technologies such as Node.js and React, I am also fluent in languages such as Python, C# and JavaScript. This qualification allows me to create impressive projects on both the front and backend. I design and code desktop applications by combining user-friendly interfaces with efficient functionality. My knowledge of databases, including SQL and NoSQL structures, gives me a significant advantage in managing data and running operations. My business-oriented approach and disciplined working style push me to deliver projects on time and with the desired quality. At the same time, my research ability allows me to always follow the technological developments that I integrate into my projects. In my spare time, I am interested in hobbies such as riding motorcycles, swimming and exploring new places. If you are looking for robust, functional and technically sound solutions for your projects, please do not hesitate to contact me.</p>
              <Technologies/>
              </div>
              <picture className='image' alt='my_photo' />
              
            </div>
            <div className='two'  style={{transform:transformTwo,display:'flex',alignItems:'center',justifyContent:'center'}} ><Mail/></div>
           
          </div>
         
    </div>
  );
}

export default Const;
