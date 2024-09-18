import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedinIn,faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons'


function Icons() {
    return (
        <>
            <div className='iconcontainer'>
                <a className='iconset' href=""><FontAwesomeIcon icon={faGithub} className='Icon' /></a>
                <a className='iconset' href=""><FontAwesomeIcon icon={faLinkedinIn} className='Icon' /></a>
                <a className='iconset' href=""><FontAwesomeIcon icon={faInstagram} className='Icon'/></a>
                <a className='iconset' href=""><FontAwesomeIcon icon={faFacebook} className='Icon'/></a>
            </div>
        </>
    )
}
export default Icons;