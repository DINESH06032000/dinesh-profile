import React, { useState } from 'react';
import '../css/contact.css';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Designed from '../components/Designed';
import axios from 'axios';


export default function Contact() {

 
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://dinesh-profile.onrender.com/cont", formData)
      .then((response) => {

        setMessage('Message send Successfully! ');
        setMessageType('success');


        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('There was an error!', error);
        setMessage('Error while sending Message');
        setMessageType('error');
      });
  }
  const closeMessage = () => {
    setMessage('');
    setMessageType('');
  }

  


  return (
    <>
      <div className={`message ${messageType}`}>
        <span>{message}</span>
        <button className="close-button" onClick={closeMessage}><IoClose/></button>
      </div>
      <div className="container contact">
        <div className="row">
          <div className="col-lg-7 col-12 contactform">
            <h4 className='contacth4'>Let's make this happen!...</h4>
            <p className='contactp'>Confidently looking forward to a partnership that exceeds expectations.</p>
            <form onSubmit={handleSubmit} className='forms' netlify='true'>
              <div className='row formname'>
                <div className="col-lg-6 mb-lg-4 mb-md-3 mb-2">
                  <input className=''
                    type="text"
                    placeholder='Firstname'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  
                </div>
                <div className="col-lg-6 mb-lg-4 mb-md-3 mb-2">
                  <input
                    type="text"
                    placeholder='Lastname'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className='row formname'>
                <div className="col-lg-6 mb-lg-4 mb-md-3 mb-2">
                  <input
                    type='email'
                    placeholder='Email address'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6 mb-lg-4 mb-md-3 mb-2">
                  <input
                    type="number"
                    placeholder='Phone number'
                    className='formnumber'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  className='formtext mb-lg-4 mb-md-3 mb-2'
                  placeholder='Enter the message...'
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div>
                <input type="submit" className='formsubmit' value={"Send Message"} />
              </div>
            </form>
          </div>
          <div className="col-lg-1 col-12"></div>
          <div className="col-lg-4 col-12 contenct mt-md-4  p-5">
            <div>
              <div className="row">
                <div className="col-2 formicons">
                  <FaPhoneAlt className='iconsform' />
                </div>
                <div className="col-10">
                  <p className='blure'>Phone</p>
                  <p>(+91) 9566995332</p>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2 formicons">
                  <IoMdMail className='iconsform' />
                </div>
                <div className="col-10">
                  <p className='blure'>E-mail</p>
                  <p>pd06032000@gmail.com</p>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-2 formicons">
                  <FaLocationDot className='iconsform' />
                </div>
                <div className="col-10">
                  <p className='blure'>Address</p>
                  <p>4/271 Venkateshapuram, Gudiyatham road, Katpadi, Vellore - 632007, Tamilnadu, India.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Designed />
      </div>
    </>
  );
}
