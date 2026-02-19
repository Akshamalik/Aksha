import { assets } from '@/assets/assets'
import React,{useState} from 'react'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
         <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with Me</h4>
        <h2 className='text-center text-5xl font-Ovo'>Get in Touch</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
        </p>
        <form>
          <div>
            <input type="text" placeholder='Enter your name' required/>
            <input type="email" placeholder='Enter your email' required/>
          </div>
          <textarea rows='6' placeholder='Enter your message' required>
            <button type='submit'>Submit now <Image src={assets.right_arrow_white} alt='' className=""/></button>
            <p className=''>sending....</p>
          </textarea>
        </form>
    </div>
  )
}

export default Contact