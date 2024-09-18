import React from 'react'
import imga from '../assets/education.jpg'
import Study from '../components/Study';
import Designed from '../components/Designed';

function Education() {
  return (
    <>
<div className="container" id="main" >
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 profileimage1" >
            <div className='box'>
              <div className='cont'>
                <img src={imga} alt="" className='a' />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-auto d-block " id='Details'>
           
            <h1>Education</h1><br />
            <h3 className='text1'>Work, Internship and Certificates</h3><br />
            <p> As a Software Developer with 8 months of experience, I excel in project management and leveraging analytics for business insights. My versatile skill set enables seamless transitions from analysis to project leadership, driving efficiency and accelerating work.</p>
            <br />
          </div>
        </div>
        <Study/>
        <Designed/>
      </div>
      
    </>
  )
}
export default Education;
