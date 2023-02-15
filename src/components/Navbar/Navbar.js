import './Navbar.css'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const closeMenu = () => {
        document.getElementById('hamNav').checked = false
    }

    return (
        <div className='navbarContainer'>
            <div className='navbar'>
                <div className='navbarLogo'>
                    <Link to='home' spy={true} smooth={true} offset={50} duration={500}>
                        <img src='/logo.png' alt='logo' />
                    </Link>
                </div>
                <nav className='navbarItems'>
                    <Link className='navItem' to='home' spy={true} smooth={true} offset={50} duration={500}>
                        Home
                    </Link>
                    <Link className='navItem' to='aboutme' spy={true} smooth={true} offset={50} duration={500}>
                        About me
                    </Link>
                    <Link className='navItem' to='portfolio' spy={true} smooth={true} offset={50} duration={500}>
                        Portfolio
                    </Link>
                    <Link className='navItem' to='skills' spy={true} smooth={true} offset={50} duration={500}>
                        Skills
                    </Link>
                    <Link className='navItem' to='contact' spy={true} smooth={true} offset={50} duration={500}>
                        Contact
                    </Link>
                    <div className='toggleContainer'>
                        <input type='checkbox' id='toggleLanguage' />
                        <label id='labelToggleLanguage' htmlFor='toggleLanguage'>
                            <span className='spanToggleLanguage'>ES</span>
                            <span className='spanToggleLanguage'>EN</span>
                            <span className='sliderLanguage'></span>
                        </label>
                    </div>
                    <div className='hamNavContainer'>
                        <input type='checkbox' id='hamNav' />
                        <label id='labelHamNav' htmlFor='hamNav'>
                            <FontAwesomeIcon icon={faBars} />
                        </label>
                        <div className='hamNavItems'>
                            <Link onClick={closeMenu} to='home' spy={true} smooth={true} offset={50} duration={500}>
                                Home
                            </Link>
                            <Link onClick={closeMenu} to='aboutme' spy={true} smooth={true} offset={50} duration={500}>
                                About me
                            </Link>
                            <Link onClick={closeMenu} to='portfolio' spy={true} smooth={true} offset={50} duration={500}>
                                Portfolio
                            </Link>
                            <Link onClick={closeMenu} to='skills' spy={true} smooth={true} offset={50} duration={500}>
                                Skills
                            </Link>
                            <Link onClick={closeMenu} to='contact' spy={true} smooth={true} offset={50} duration={500}>
                                Contact
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar