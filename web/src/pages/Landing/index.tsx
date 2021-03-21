import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


// Icons and Logos
import logo from '../../assets/images/logo.svg'
import landing from '../../assets/images/landing.svg'
import study from '../../assets/images/icons/study.svg'
import giveClasses from '../../assets/images/icons/give-classes.svg'
import purpleHeart from '../../assets/images/icons/purple-heart.svg'

// Style this page
import './styles.css'

// api
import api from '../../services/api';


function Landing () {

  

  const [totalConnections, setTotalConnections] = useState(0)


  useEffect(() => {
    api.get('connections').then(response => {
      setTotalConnections(response.data.total)
    })
  },[])


  return (
    <div id='page-landing'>
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="logo"/>
          <h2>sua plataforma de estudos online</h2>
        </div>
        <img src={landing} alt="platoforma de estudos" className="hero-image"/>

      <div className="buttons-container">
        <Link to='/study' className='study'>
          <img src={study} alt="estudar"/>
          Estudar
        </Link>
        <Link to='/give-classes' className='give-classes'>
          <img src={giveClasses} alt="estudar"/>
          Ensinar
        </Link>
      </div>

      <span className='total-connections'>
        Total de {totalConnections} conexões já realizadas <img src={purpleHeart} alt="Connectar"/>
      </span>

      </div>
    </div>
  )
}

export default Landing