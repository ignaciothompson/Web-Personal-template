import React from 'react';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
    console.log(portfolioData)

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.cover}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }



    return (
    <>
    <div className='container portfolio-page'>
        <div className='page-title'>
            <h1>
                <AnimatedLetters 
                    strArray={['P','o','r','t','a','f','o','l','i','o',]}
                    idx={15}
                />
            </h1>
        </div>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
    </div>
    <Loader type='ball-grid-pulse' />
    </>
    );
}

export default Portfolio