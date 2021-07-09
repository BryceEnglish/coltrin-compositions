import React from 'react'
import logo from '../images/logo.svg'
import logoText from '../images/ColtrinComp_TEXT.png';

const SplashScreen = () => {
    return (
        <div className="splashScreen">
            <img src={logo} className="splashScreen-logo" alt="logo" />
            <img src={logoText} className="splashScreen-text" alt="coltrin compositions" />
        </div>
    )
}

export default SplashScreen
