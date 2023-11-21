import React from 'react';
import "./intro.css";
import bg from '../../assets/image.png';
import{ Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText"> I'm <span className="introName">Tin</span><br />Website Designer</span>
            <p className="introPara">I am a skilled web designer with experience in creating <br /> visually appealing and friendly websites.</p>
            <Link><button className="btn">Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;