import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faCopy, faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: 1000
        })
    }

    const copyToClipboard = () => {
        const copyText = document.getElementById('copyText')
        navigator.clipboard.writeText(copyText.innerText)
        document.getElementById('copy').innerHTML = 'Copied!'
        document.getElementById('copy').style.border = '1px solid #299646'
        setTimeout(() => {
            document.getElementById('copy').innerHTML = 'Copy'
            document.getElementById('copy').style.border = '1px solid #AD1AAF'
        }, 1200)
    }

    return (
        <div className='contactContainer' id='contact'>
            <div className='greeting'>✉️ Contact</div>
            <h3>Let’s Talk</h3>
            <div className='contactOptions'>
                <a className='whatsappLink' href='https://api.whatsapp.com/send?phone=541131918140' target='_blank' rel='noreferrer'><FontAwesomeIcon className='fa-gradient' icon={faWhatsapp} /> Message me!</a>
                <div className='email'>
                    <h4>E-mail</h4>
                    <p id='copyText'>dante_jterranova463@hotmail.com</p>
                    <div className='emailOptions'>
                        <a href='mailto:dante_jterranova463@hotmail.com' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon className='fa-gradient' icon={faPaperPlane} />
                        </a>
                        <FontAwesomeIcon className='fa-gradient' icon={faCopy} id='copyIcon' onClick={copyToClipboard} />
                        <span className='tooltiptext' id='copy'>Copy</span>
                    </div>
                </div>
            </div>
            <h4 className='backToTop' onClick={backToTop}>Back to top <FontAwesomeIcon className='fa-gradient' icon={faArrowUp} /></h4>
        </div>
    )
}

export default Contact