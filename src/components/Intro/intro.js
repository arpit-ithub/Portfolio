import React from 'react'
import './intro.css'
import apic from '../../assets/images/profile.png'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../Intro/AnimatedLetters'


function Intro() {

  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['A', 'r', 'p', 'i', 't']
  const jobArray = ['F','r', 'o', 'n', 't', 'e', 'n', 'd', '', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'  ]

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <section id="intro" className="container home-page">
      <div className="text-zone">
      
        <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
          
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
        <p className="introPara">
          I am a skilled Frontend Developer with experience in creating <br/>visually
          appealing and well written code
        </p>        
      </div>
      <img src={apic} alt="Profile" className="apic" />
    </section>
  )
}

export default Intro
