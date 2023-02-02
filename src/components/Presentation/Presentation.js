import './Presentation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faInstagram, faReact, faSquareJs, faNodeJs, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Presentation = () => {
    return (
        <div className='presentationContainer'>
            <div className='presentation'>
                <div className='presentationElement name'>
                    <div className='greeting'>👋 Greeting!</div>
                    <h1>Dante<br/>Terranova</h1>
                    <h2>Full-Stack Developer</h2>
                    <ul className='socials'>
                        <li><FontAwesomeIcon className='fa-gradient fa-2xl' icon={faGithub} /></li>
                        <li><FontAwesomeIcon className='fa-gradient fa-2xl' icon={faLinkedinIn} /></li>
                        <li><FontAwesomeIcon className='fa-gradient fa-2xl' icon={faInstagram} /></li>
                    </ul>
                </div>
                <div className='presentationElement astronaut'>
                    <div className='eclipse'>
                        <div className='eclipseBlur'></div>
                        <div className='ring'>
                            <div className='ringTech'><FontAwesomeIcon className='fa-gradient fa-2xl' icon={faReact} /></div>
                            <div className='ringTech'><FontAwesomeIcon className='fa-gradient fa-2xl' icon={faSquareJs} /></div>
                            <div className='ringTech'><FontAwesomeIcon className='fa-gradient fa-2xl' icon={faNodeJs} /></div>
                        </div>
                        <img className='astronautImage' src='/astronaut.svg' alt='astronaut' />
                    </div>
                </div>
                <div className='presentationElement cv'>
                    <a className='downloadCv' href='/cv-english.pdf' download='Terranova-CV'>Download CV <FontAwesomeIcon className='fa-gradient' icon={faArrowDown} /></a>
                    <a className='whatsappLink' href='https://api.whatsapp.com/send?phone=541131918140' target='_blank' rel='noreferrer'><FontAwesomeIcon className='fa-gradient' icon={faWhatsapp} /> Let's talk</a>
                </div>
            </div>
            <img className='waves' src='/waves.png' alt='' />
            <div className='workContainer'>
                <div className='workBoxes'>
                    <div className='workBox'>
                        <img src='/code.svg' alt='code' />
                        <h3>Programmer</h3>
                    </div>
                    <div className='workBox'>
                        <img src='/works.svg' alt='works' />
                        <h3>Works</h3>
                    </div>
                </div>
                <div className='worksDescription'>
                    <div className='description'>
                        <div>
                            <h3 className='title'>Developer</h3>
                            <h3 className='desc'>Full-Stack</h3>
                        </div>
                        <div>
                            <h3 className='title'>Dozens of projects and</h3>
                            <h3 className='desc'>Experience</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation