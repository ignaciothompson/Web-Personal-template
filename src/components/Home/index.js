import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/IILOGO.png'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['g','n','a','c','i','o']
    const jobArray = ['D','e','s','a','r','r','o','l','l','a','d','o','r',' ','W','e','b','.']
    
    useEffect (()=>{
         setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>o</span>
                <span className={`${letterClass} _13`}>l</span>
                <span className={`${letterClass} _14`}>a</span>
                <br />
                <span className={`${letterClass} _15`}>S</span>
                <span className={`${letterClass} _16`}>o</span>
                <span className={`${letterClass} _17`}>y</span>
                <img src={LogoTitle} alt='developer'/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={18} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={25} />
                </h1>
                <h2>Desarrollador Front-end</h2>
                <Link to="/contact" className='flat-button'>Contactame</Link>
            </div>
        </div>
        <Loader type='ball-grid-pulse' />
        </>
    )
}

export default Home