import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import classNames from 'classnames';

import ContactBox from '../components/ContactBox';
import HomeIcon from '@mui/icons-material/Home';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact(){
  const form = useRef();
  const [wasMessageSuccessful, setWasMessageSuccessful] = useState("");
  const [isValid, setIsValid] = useState(false)

  let addressIcon = <HomeIcon className='text-red-500 mx-4 my-1'/>
  let phoneIcon = <ContactPhoneIcon className='text-red-500 mx-4 my-1'/>
  let emailIcon = <EmailIcon className='text-red-500 mx-4 my-1'/>
  let linkedInIcon = <LinkedInIcon className='text-red-500 mx-4 my-1'/>
  let githubIcon = <GitHubIcon className='text-red-500 mx-4 my-1'/>

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bx3llqj', 'template_ivfj7gn', form.current, 'B2N074aGOvINavmyr')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          setWasMessageSuccessful("success")
      }, (error) => {
          console.log(error.text);
          setWasMessageSuccessful("fail")
      });
  };

  const sentEmailSwitchMessage = () =>
  {
    switch (wasMessageSuccessful) {
      case "":   
      default:
        return null;
      case "success":
        return <div className='w-full mx-10 text-left flex'>Message Sent, thank you!</div>;
      case "fail":
        return <div className='w-full mx-10 text-left flex'>Message failed to send, please try again!</div>;
    }
  }
  const emailValidation = (event) =>
  {
    let value = event.target.value;

    let result = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    setIsValid(result);
    // TODO
  }

  return (
    <div>
      <h1 className='px-10 pb-20 text-left text-3xl'>Get in <span className='text-red-500 font-bold'>Touch</span></h1>
      <div className='w-full flex'>
        <div className='forms-of-contact w-full'>
          <ContactBox icon={addressIcon} content="Saddle Brook, NJ"/>
          <ContactBox icon={phoneIcon} content="+1 201 951 1945"/>
          <ContactBox icon={emailIcon} content="tmenichel@protonmail.com"/>
          <ContactBox icon={linkedInIcon} content={<a href='https://www.github.com/TadeoM'>@TadeoM</a>}/>
          <ContactBox icon={githubIcon} content={<a href='https://www.linkedin.com/in/tadeo-menichelli-592a02126/'>@tadeo-menichelli</a>}/>
        </div>
        <div className='contact-form w-full'>
          <form className='w-full' ref={form} onSubmit={sendEmail}>
            <div className=' w-full flex my-5'>
              <input className='w-full mx-10 rounded-lg py-2 px-4 bg-neutral-800 text-neutral-400' id='name' type='text' placeholder='Name' name='user_name' required/>
              <input className='w-full mx-10 rounded-lg py-2 px-4 bg-neutral-800 text-neutral-400' id='email' type='email' placeholder='Email' name='user_email' onChange={emailValidation} required/>
            </div>
            <div className='w-full flex'>
              <textarea className='w-full h-36 mx-10 rounded-lg py-2 px-4 bg-neutral-800 text-neutral-400' id='message' type='text' placeholder='Message' name='message' required/>
            </div>
            <button className='m-5 mx-10 px-5 py-2 bg-red-500 rounded-full float-left' disabled={!isValid} type='submit' value='Send'>Submit Message</button>
            <div className={
              classNames({
                hidden: isValid,
              })
            }>Email is invalid!</div>
            { sentEmailSwitchMessage() }
          </form>
        
        </div>
      </div>
      
    </div>
  )
}
