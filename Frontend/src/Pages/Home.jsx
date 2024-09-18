import React from 'react'
import Icons from '../components/Icons'
import '../App.css'
import img from '../assets/Asset 4.png'
import Designed from '../components/Designed'
import TCS from '../components/TCS'


function Home() {
  return (
    <>
      <div className="container" id="main" >
        <div className="row">

          <div className="col-lg-6 col-md-6 col-sm-12 my-auto d-block " id='Details'>
            <p>Java Full Stack Developer</p>
            <h1>Hello I'm</h1><br />
            <h1 className='text1 '>DINESH PADMANABAN</h1>  Hi! I'm Dinesh Padmanaban, a passionate front-end developer and back-end developer specializing in translating design concepts into seamless and interactive web experience using HTML, CSS, Bootstrap, JavaScript, React JS and Java.
            <br />
            <div className='icons12'><Icons /></div>
            <div className=' downloadbtn mx-auto d-flex mt-lg-5 mt-md-4 mt-3 justify-content-center'>
              <a href="DINESH PADMANABAN.pdf" download className='downloadcv'>Download CV</a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 profileimage" >
            <div className='profileimg'>
              <img src={img} alt="" className='profile' />
            </div>
          </div>
        </div>
        <hr />
        <TCS/>
        <Designed />
      </div>

    </>
  )
}
export default Home;