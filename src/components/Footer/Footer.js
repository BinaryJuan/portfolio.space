import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div>Copyright © Dante Terranova · 2022</div>
            <div className='footerSocialsContainer'>
                <a href='https://www.linkedin.com/in/dante-terranova-2383361a4/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedinIn} className='footerSocials' /></a>
                <a href='https://github.com/BinaryJuan' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} className='footerSocials' /></a>
                <a href='https://stackoverflow.com/users/16031354/dante001' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faStackOverflow} className='footerSocials' /></a>
            </div>
        </div>
    )
}

export default Footer