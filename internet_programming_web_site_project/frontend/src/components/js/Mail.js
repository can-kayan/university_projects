
import {  useState } from 'react';
import '../css/Mail.css';
import Axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Mail() {
    const [from,setFrom]=useState('')
    const [subject,setSubject]=useState('')
    const [text,setText]=useState('')

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          if(from && subject && text){
            const response = await Axios.post(`http://localhost:5000/mySite/mail/send`, {
              from,
              subject,
              text
            });
            console.log(response.data); // Başarılı yanıtı konsola yazdır
            toast.success('Mail başarıyla gönderildi!', { position: toast.POSITION.BOTTOM_RIGHT ,style:{backgroundColor:'#14121a',border:'0'}});
            setFrom('')
            setSubject('')
            setText('')
          }          
          else{
            toast.warning('Lütfen boş alanları doldurun!',{position:toast.POSITION.BOTTOM_RIGHT,style:{backgroundColor:'#14121a',border:'0'}})
          }
        } catch (error) {
          console.error('Hata:', error); // Hata durumunda konsola yazdır
          toast.error('Mail gönderilirken bir hata oluştu.', { position: toast.POSITION.TOP_CENTER,style:{backgroundColor:'#14121a',border:'0'} });
        }
      };
  return (
    <form className='froms' onSubmit={handleSubmit} >
      <div className='flexs'>
        <h2 className='form_item'>Email</h2>
        <input type="email" name="from" className='inputs' placeholder='Enter your e-mail' value={from} onChange={e=>setFrom(e.target.value)} />
      </div>
      <div className='flexs'>
        <h2 className='form_item'> Subject</h2>
        <input type="text" name="subject" className='inputs' value={subject} onChange={e=>setSubject(e.target.value)} />
      </div>
      <div className='flexs priv'>
        <h2 className='form_item'>Message</h2>
        <textarea name="text" className='inputs area' value={text} onChange={e=>setText(e.target.value)} />
        
      </div>
      <button type="submit" className='inputs sub'onClick={handleSubmit}>Gönder</button>
      <ToastContainer />
    </form>
    
  );
}

export default Mail;
