import { react, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name:'', email:'', message:''});
  const [isLoading, setIsLoading] = useState(false);

  // Taking key press event, set form will select the specific field to update 
  const handleForm = (event) => {
    setForm({...form, [event.target.name] : event.target.value})
  };

  // Gets the final keypress event
  const handleSubmit =(event) => {
    event.preventDefault();
    setIsLoading(true);
    // console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID)
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Colleen",
        from_email: form.email,
        to_email: import.meta.env.VITE_APP_EMAILJS_PERSONAL,
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      
    ).then(() => {

      setIsLoading(false);
      setForm({name:'', email:'', message:''});

    }).catch((error) => {

      setIsLoading(false);
      console.log(error);
    })
  };

  return (
    <section id="contact">
      <div className="section-content">
        <h2>Contact Me</h2>
        <p>Whether you have a potential opportunity or just want to say hi, lets get in touch! </p>
          <form className='contactForm' onSubmit={handleSubmit}>
            <label>
              <h5 className='highlight'>Name</h5>
              <input 
                type='text' 
                name='name' 
                className='input' 
                placeholder='John' 
                required 
                value={form.name}
                onChange={handleForm}
              /> 
            </label>

            <label >
              <h5 className='highlight'>Email</h5>
              <input 
                type='email' 
                name='email' 
                className='input' 
                placeholder='john@gmail.com' 
                required 
                value={form.email}
                onChange={handleForm}
              /> 
            </label>

            <label>
              <h5 className='highlight'>Message</h5>
              <textarea 
                name='message' 
                rows={4}
                className='textArea' 
                placeholder='Message' 
                required 
                value={form.message}
                onChange={handleForm}
              /> 
            </label>
            
            <button
              type='submit'
              className='linkSection'
              disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
            </button>

          </form>
          </div>
    </section>
  )
}

export default Contact