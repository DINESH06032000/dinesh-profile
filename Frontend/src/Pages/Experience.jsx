import React from 'react'
import Icons from '../components/Icons'
import '../css/Experience.css'
import imga from '../assets/Asset 5.png'
import Work from '../components/Work'
import Designed from '../components/Designed'


function Experience() {
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
            <p>Java Full Stack Developer</p>
            <h1>Experience</h1><br />
            <h3 className='text1'>Work, Internship and Certificates</h3><br />
            <p> As a Java Full stack Developer with under a year of experience, I excel in project management and utilizing analytics for actionable business insights. My versatile skill set enables smooth transitions from technical analysis to project leadership, driving efficiency and expediting workflows.</p>
            <br />
          </div>
        </div>
        <Work />
        <Designed />
      </div>
    </>
  )
}
export default Experience;
