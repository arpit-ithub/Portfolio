import React from 'react';
import './skills.css';
import htmllogo from '../../assets/images/html-logo.png';
import csslogo from '../../assets/images/css-logo.png';
import jslogo from '../../assets/images/js-logo.png';
import reactlogo from '../../assets/images/react-logo.png';

function Skills() {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDescription'>
            I am a skilled Frontend Developer with the knowledge of HTML, CSS and JavaScript. I also know about the ReactJs. I have strong understanding of making a single page website with quick response and writing in well mannered and maintainable code.
        </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={htmllogo} alt='html' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>HTML</h2>
                    <p>I have a proficiency in HTML5</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={csslogo} alt='css' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>CSS</h2>
                    <p>I have proficiency in CSS3</p>
                </div>
            </div>        
            <div className='skillBar'>
                <img src={jslogo} alt='javascript' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>JavaScript</h2>
                    <p>I have good knowledge of JavaScript.</p>
                </div>
            </div>        
            <div className='skillBar'>
                <img src={reactlogo} alt='ReactJs' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>ReactJs</h2>
                    <p>I have good understanding of ReactJs</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills