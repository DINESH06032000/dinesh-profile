import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedinIn,faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons'


function Icons() {
    return (
        <>
            <div className='iconcontainer'>
                <a className='iconset' href="https://github.com/DINESH06032000"><FontAwesomeIcon icon={faGithub} className='Icon' /></a>
                <a className='iconset' href="https://www.linkedin.com/in/dinesh-p-548663226"><FontAwesomeIcon icon={faLinkedinIn} className='Icon' /></a>
                <a className='iconset' href="https://www.instagram.com/dinesh__06/?igsh=NzVka3I3dnY0cTcz"><FontAwesomeIcon icon={faInstagram} className='Icon'/></a>
                <a className='iconset' href="https://www.facebook.com/dinesh.mendy.3?mibextid=ZbWKwL"><FontAwesomeIcon icon={faFacebook} className='Icon'/></a>
            </div>
        </>
    )
}
export default Icons;