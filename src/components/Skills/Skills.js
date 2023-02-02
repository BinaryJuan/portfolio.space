import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faSquareJs, faHtml5, faCss3Alt, faNodeJs, faPython, faSass, faDocker, faJava } from '@fortawesome/free-brands-svg-icons'
import { faLeaf, faDatabase, faComputer, faWind } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
    return (
        <div className='skillsContainer' id='skills'>
            <div className='greeting'>🎯 Skills</div>
            <h3>Technologies and Skills</h3>
            <div className='techsContainer'>
                <h4>Techs I use on a daily basis</h4>
                <div className='techs'>
                    <FontAwesomeIcon className='fa-gradient' icon={faReact} title='React' />
                    <FontAwesomeIcon className='fa-gradient' icon={faSquareJs} title='Javascript' />
                    <FontAwesomeIcon className='fa-gradient' icon={faHtml5} title='HTML' />
                    <FontAwesomeIcon className='fa-gradient' icon={faCss3Alt} title='CSS' />
                    <FontAwesomeIcon className='fa-gradient' icon={faNodeJs} title='NodeJS' />
                </div>
            </div>
            <div className='techsContainer'>
                <h4>Other techs I've done projects with</h4>
                <div className='techs'>
                    <FontAwesomeIcon className='fa-gradient' icon={faPython} title='Python' />
                    <FontAwesomeIcon className='fa-gradient' icon={faSass} title='SASS' />
                    <FontAwesomeIcon className='fa-gradient' icon={faDocker} title='Docker' />
                    <FontAwesomeIcon className='fa-gradient' icon={faWind} title='Tailwind' />
                    <FontAwesomeIcon className='fa-gradient' icon={faJava} title='Java' />
                    <FontAwesomeIcon className='fa-gradient' icon={faLeaf} title='MongoDB' />
                    <FontAwesomeIcon className='fa-gradient' icon={faDatabase} title='MySQL' />
                    <FontAwesomeIcon className='fa-gradient' icon={faComputer} title='Delphi/Pascal/Assembler' />
                </div>
            </div>
        </div>
    )
}

export default Skills