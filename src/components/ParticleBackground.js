import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from '../config/particles-config';


const ParticleBackground = () => {
    return (
        <Particles params={particlesConfig}></Particles>
    )
}

export default ParticleBackground;
