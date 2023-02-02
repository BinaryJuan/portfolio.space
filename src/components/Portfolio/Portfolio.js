import './Portfolio.css'
import Project from '../Project/Project'
import projects from './projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
    return (
        <div className='portfolioContainer' id='portfolio'>
            <div className='portfolio'>
                <div className='greeting'>💼 Portfolio</div>
                <h3>Works and Projects</h3>
                <div className='projectsContainer'>
                    {projects.map((project) => (
                        <Project key={project.id} project={project} />
                    ))}
                </div>
                <a className='githubLink' href='https://github.com/BinaryJuan?tab=repositories' target='_blank' rel='noreferrer'>View more projects on GitHub <FontAwesomeIcon className='fa-gradient' icon={faArrowRightLong} /></a>
            </div>
        </div>
    )
}

export default Portfolio