import React from 'react';
import './About.css'
import sr from '../../images/sr.jpeg'

const About = () => {
    return (
      <div className='about'>
          <h1 className='text-center text-primary'>About Me</h1>
            <div className='aboutme'>
            
            <div>
            <h2>MD.Sohanur Rahman Sohan</h2>
            <p>Assalamuoalaikum.Now I am studing at Daffordil International University.Department of Software Engineering.My runnig semester is 10th.Now my goal is to be a web developer.I am  trying to develop myself.After my graduation I will go for job.Now my goal is next 8 months I will learn more about React,Node and MongoDB.I wish, I will do it.</p>
            </div>
            <div>
                <img width={200} className='rounded-3' src={sr} alt="" />

            </div>
        </div>
      </div>
    );
};

export default About;