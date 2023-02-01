import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div className='navbarContainer'>
            <div className='navbar'>
                <div className='navbarLogo'>
                    <Link to='home' spy={true} smooth={true} offset={50} duration={500}>
                        <img src='/logo.png' alt='Star Wars Logo' />
                    </Link>
                </div>
                <nav className='navbarItems'>
                    <Link to='home' spy={true} smooth={true} offset={50} duration={500}>
                        Home
                    </Link>
                    <Link to='aboutme' spy={true} smooth={true} offset={50} duration={500}>
                        About me
                    </Link>
                    <Link to='portfolio' spy={true} smooth={true} offset={50} duration={500}>
                        Portfolio
                    </Link>
                    <Link to='skills' spy={true} smooth={true} offset={50} duration={500}>
                        Skills
                    </Link>
                    <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>
                        Contact
                    </Link>
                    <div className='toggleContainer'>
                        <input type="checkbox" id="toggleLanguage" />
                        <label id='labelToggleLanguage' htmlFor="toggleLanguage">
                            <span className='spanToggleLanguage'>ES</span>
                            <span className='spanToggleLanguage'>EN</span>
                            <span className='sliderLanguage'></span>
                        </label>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar