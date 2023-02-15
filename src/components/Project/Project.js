import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const Project = ({project}) => {
    return (
        <div className='projectContainer'>
            <div className='project'>
                <div className='content'>
                    <div className='status'>
                        <div className={project.status === 'Live' ? 'projectStatusLive' : 'projectStatusPending'}>{project.status}</div>
                        <a href={project.github} target='_blank' rel='noreferrer'><FontAwesomeIcon className='fa-gradient' icon={faGithub} /></a>
                    </div>
                    <h3>{project.name}</h3>
                    <p>
                        {project.description}
                    </p>
                    <img src={project.image} alt={project.name} />
                    <a className='projectLink' href={project.link} target='_blank' rel='noreferrer'>travel website <FontAwesomeIcon className='fa-gradient' icon={faArrowRightLong} /></a>
                    <div className='technologies'>
                        {project.technologies.map((technology) => (
                            <div className='technology' key={technology}>
                                {technology}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project