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
  const [isValid, setIsValid] = useState(true)

  let emailUsed = ""

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
  const emailValidation = () =>
  {
    let result = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailUsed);
    setIsValid(result);
    // TODO
  }
  const emailChanged = (e) => {
    emailUsed = e.target.value
  }

  return (
    <div className=''>
      <h1 className='w-full px-10 pb-10 md:pb-20 text-left text-3xl'>Get in <span className='text-red-500 font-bold'>Touch</span></h1>
      <div className='w-full block md:flex '>
        <div className='forms-of-contact w-full px-7'>
          <ContactBox icon={addressIcon} content="Saddle Brook, NJ"/>
          <ContactBox icon={phoneIcon} content="+1 201 951 1945"/>
          <ContactBox icon={emailIcon} content="tmenichel@protonmail.com"/>
          <ContactBox icon={linkedInIcon} content={<a href='https://www.github.com/TadeoM'>@TadeoM</a>}/>
          <ContactBox icon={githubIcon} content={<a href='https://www.linkedin.com/in/tadeo-menichelli-592a02126/'>@tadeo-menichelli</a>}/>
        </div>
        <div className='contact-form w-full pt-5'>
          <form className='' ref={form} onSubmit={sendEmail}>
            <div className=' w-full flex my-5'>
              <input className='w-full ml-7 mr-1 rounded-lg py-2 px-4 bg-neutral-800 text-neutral-400' id='name' type='text' placeholder='Name' name='user_name' required/>
              <input className='w-full ml-1 mr-7 rounded-lg py-2 px-4 bg-neutral-800 text-neutral-400' id='email' type='email' placeholder='Email' name='user_email' onChange={emailChanged} required/>
            </div>
            <div className='w-full flex'>
              <textarea className='w-full h-36 mx-7 rounded-lg py-2 px-4 bg-neutral-800 text-neutral-400' id='message' type='text' placeholder='Message' name='message' required/>
            </div>
            <button className='m-5 mx-10 px-5 py-2 bg-red-500 rounded-full float-left hover:brightness-75' disabled={!isValid} type='submit' value='Send' onSubmit={emailValidation}>Submit Message</button>
            <div className={
              classNames({
                hidden: isValid,
              }, 'w-full')
            }>Email is invalid!</div>
            { sentEmailSwitchMessage() }
          </form>
        
        </div>
      </div>
      
    </div>
  )
  // className={classNames('h-full transition-all duration-500 object-contain bg-black', {'hidden': isValid})}
}
