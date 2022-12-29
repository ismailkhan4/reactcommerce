import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {

    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img src='./img/bg.jpg' className="card-img" alt="Background" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 text-uppercase fw-bolder mb-0">It's Shopping Time</h5>
                        <p className="card-text lead fs-2 text-uppercase">check out all the trends</p>
                        <div className="d-grid gap-2 w-25">
                            <Link to='/items' className='btn btn-light btn-lg btn-block'>Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero