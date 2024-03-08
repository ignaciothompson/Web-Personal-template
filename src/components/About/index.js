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
                        strArray={['S','o','b','r','e',' ','m','i',]}
                        idx={15}
                    />
                </h1>
                <p>
                ¡Hola! Soy un desarrollador front-end con experiencia en la creación de sitios web amigables para el usuario. Mi pasión por el desarrollo web comenzó temprano en mi carrera, y he perfeccionado mis habilidades a través de diversos proyectos. Como desarrollador front-end, me especializo en la implementación de interfaces de usuario responsivas que mejoran la experiencia del usuario.                
                </p>
                <p>
                Destaco en el diseño y desarrollo de interfaces web intuitivas que satisfacen las necesidades de los clientes. Mi experiencia en tecnologías front-end me permite desarrollar sitios web dinámicos que cumplen con los estándares de la industria. Trabajando con los clientes, me aseguro de que el producto final esté adaptado a sus objetivos únicos.                
                </p>
                <p>
                Me mantengo al día con las últimas tendencias y tecnologías de desarrollo web, siempre experimentando con nuevas ideas y técnicas. Estoy comprometido a mejorar mis habilidades para ofrecer sitios web de alta calidad que cautiven y deleiten a los usuarios. Si estás buscando un desarrollador front-end apasionado, ¡me encantaría trabajar contigo!                
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