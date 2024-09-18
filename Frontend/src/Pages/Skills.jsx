import Designed from '../components/Designed';
import Skill1 from '../components/Skill1';
import Skill2 from '../components/Skill2';
import Skill3 from '../components/Skill3';
import Skill4 from '../components/Skill4';
import '../css/skills1.css'


function Skills() {


  return (
    <>

    <div className="container">
      <div><br />
      <h1>Skills</h1><br />
            <h3 className='text1'>Dynamic Software Developer with Expertise in Full Stack Development</h3><br />
            <p>Specializing in building dynamic, scalable web applications. Proficient in both front-end and back-end technologies, delivering end-to-end solutions</p>
            <br />
      </div>

      <div className="row row1">
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
          <Skill1/>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
        <Skill2/>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
        <Skill3/>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 skill">
        
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
        <Skill4/>
        </div> 
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 skill">
        
        </div>
      </div>

      <Designed className="designskill"/>
      </div>

    </>
  )
}

export default Skills;
