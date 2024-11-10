import React from 'react';
import '../styles/about.css'; // Make sure to import the custom CSS

function About() {
  return (
    <div className='about-container'>
      <section className="body-font">
        <div className="container">
          <div className="about-content">
            <div className="text-section">
              <h1 className="title">About Me</h1>
              <p className="description">
                I am expert in Html, Tailwind Css, Javascript, Typescript, Nextjs, Sanity and also Postgre SQL. I have made many websites.
                Enthusiastic learner at PIAIC diving deep into the realms of certified cloud-applied Generative AI.
                Fueled by a passion for cutting-edge technologies, I'm on a mission to leverage these skills for an impactful freelancing venture.
                With a commitment to continuous growth, I'm excited about contributing to innovative projects and connecting with like-minded professionals. 
                I am a very passionate and hardworking person.
                <br />
                Contact: Please email me at <span className='email'>rahmansiddiqui331@gmail.com</span> to reach out to me.
              </p>
              <div className="button-container">
                <a href="/cv.pdf" target="_blank">
                  <button className="cv-button">View CV</button>
                </a>
              </div>
            </div>
            <div className="image-section">
              <img 
                className="profile-image" 
                alt="photo" 
                src="/photo.jpg" 
                width={400} 
                height={300} 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
