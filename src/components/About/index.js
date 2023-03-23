import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCss3, faGitAlt, faHtml5, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () =>{

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        strArray={['A','b','o','u','t',' ','m','e',]}
                        idx={15}
                    />
                </h1>
                <p>
                Hi! I'm a front end developer with experience creating user-friendly websites. My passion for web development began early in my career, and I've honed my skills through various projects. As a front end developer, I specialize in implementing responsive user interfaces that enhance the user experience.                
                </p>
                <p>
                I excel at designing and developing intuitive web interfaces that meet clients' needs. My expertise in front-end technologies enables me to develop dynamic websites that meet industry standards. Working with clients, I ensure that the end product is tailored to their unique goals.                
                </p>
                <p>
                I stay current with the latest web development trends and technologies, always experimenting with new ideas and techniques. I'm committed to improving my skills to deliver high-quality websites that engage and delight users. If you're looking for a passionate front end developer, I'd love to work with you!                
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon  icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon  icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon  icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon  icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon  icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon  icon={faGitAlt} color='#EC4D28' />
                    </div>

                </div>

            </div>

        </div>
        <Loader type='ball-grid-pulse' />
        </>
    )
}

export default About