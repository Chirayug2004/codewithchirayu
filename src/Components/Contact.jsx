import Form from "./Form";
import contPic from "/src/assets/contact.png";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact () {

  const form = useRef();
  const ServiceId ="service_z79wa2r";
  const TemplateId ="template_kvro3lh";
  const Publickey ="GyPOcVBFADb-pMW69";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(ServiceId, TemplateId, form.current, {
        publicKey: Publickey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Massage Sent Successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message.');
        },
      );
  };

  {/* const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_z79wa2r',
      'template_nl6f0yq',
      form.current,
      'GyPOcVBFADb-pMW69'
    )
    .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        form.current.reset(); // clear form
    }, (error) => {
        console.log(error.text);
        alert('Failed to send message.');
    });
  };*/}

  return (
    <>
    <div className="flex md:flex-row flex-col">
    <div className="md:min-h-screen min-h-full md:w-[40%] w-[100%]">
        <h1 className="p-5 font-bold"><span className="text-amber-500">-</span> Hire Me</h1>
        <h1 className="p-2 text-4xl">Let's Talk for <span className="text-amber-500">Your Next Projects</span></h1>
        <img className="place-self-center h-30 mt-30" src={contPic} alt="" />
    </div>
    <div className="md:min-h-screen min-h-full md:w-[60%] w-[100%] flex items-center justify-center">
    <Form formRef={form} handleSubmit={sendEmail} />
    </div>
    </div>
    </>
  )
}

export default Contact
