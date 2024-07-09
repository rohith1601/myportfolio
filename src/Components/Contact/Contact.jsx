import React from 'react'
import "./Contact.css"
import Swal from 'sweetalert2';
import mail_icon from "../../assets/mail_icon.svg"
import call_icon from "../../assets/call_icon.svg"
import location_icon from "../../assets/location_icon.svg"

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "81c770fc-20e2-4bae-bdb7-4e56ce08830e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      Swal.fire({
        title: "Message sent",
        icon: "success"
      });
    } else {
      console.log("Error", data);
      Swal.fire({
        title: "Message not sent",
        icon: "error"
      });
      setResult(data.message);
    }
  };
    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I am currently learning Socket.io programming and have Knowledge on MERN stack Projects , feel free to send me a message.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="mail_icon" />
                            <p>doragacharlarohithreddy@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="call_icon" />
                            <p>+91 7842461601</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="location_icon" />
                            <p>Chinaparimi, Andhra Pradesh</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name='email' />
                    <label htmlFor="">Message</label>
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Enter your message"></textarea>
                    <button type="submit" className='contact-submit'>Send Message</button>
                </form>
            </div>

        </div>
    )
}

export default Contact
