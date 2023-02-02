import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faCopy, faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: 1500
        })
    }

    return (
        <div className='contactContainer' id='contact'>
            <div className='greeting'>✉️ Contact</div>
            <h3>Let’s Talk</h3>
            <div className='contactOptions'>
                <a className='whatsappLink' href='https://api.whatsapp.com/send?phone=541131918140' target='_blank' rel='noreferrer'><FontAwesomeIcon className='fa-gradient' icon={faWhatsapp} /> Let's talk</a>
                <div className='email'>
                    <h4>E-mail</h4>
                    <p>dante_jterranova463@hotmail.com</p>
                    <div className='emailOptions'>
                        <a href='mailto:dante_jterranova463@hotmail.com' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon className='fa-gradient' icon={faPaperPlane} title='Send' />
                        </a>
                        <FontAwesomeIcon className='fa-gradient' icon={faCopy} title='Copy' />
                    </div>
                </div>
            </div>
            <h4 className='backToTop' onClick={backToTop}>Back to top <FontAwesomeIcon className='fa-gradient' icon={faArrowUp} /></h4>
        </div>
    )
}

export default Contact