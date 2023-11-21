import React from 'react';
import './about.css';
import languages from '../../assets/languages.png';
import libraries from '../../assets/libraries.png';
import tools from '../../assets/tools.png';

const About = () => {
  return (
    <section id='about'>
      <span className="aboutTitle">What I do</span>
      <span className="aboutDesc">I am a skilled web designer </span>
      <div className="skillBars">

        <div className="skillBar">
          <img src={languages} alt="languages" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Languages</h2>
            <p>This is a demo text</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={libraries} alt="libraries" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Libraries and Frameworks</h2>
            <p>This is a demo text</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={tools} alt="tools" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Tools</h2>
            <p>This is a demo text</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About;