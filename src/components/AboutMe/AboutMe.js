import './AboutMe.css';
import { aboutMe } from '../../portfolio'

const AboutMe = () => {
  const { role, description, technicalSkills, picture, name } = aboutMe;

  return (
    <section className='about-me' id='about-me'>
      <h2 className='section__title'>About Me</h2>
      <div className='about-me__container'>
        {/* Left Column: Picture */}
        <div className='about-me__image-container'>
          {picture && (
            <img
              src={
                picture.startsWith('http')
                  ? picture
                  : `${process.env.PUBLIC_URL}/images/${picture}`
              }
              alt={name}
              className='about-me__picture'
            />
          )}
        </div>

        {/* Right Column: Text Content */}
        <div className='about-me__text-container'>
          <h3 className='about-me__role'>{role}</h3>
          
          {/* Render each paragraph from the description array */}
          {description.map((paragraph) => (
            <p className='about-me__description'>
              {paragraph}
            </p>
          ))}
          
          <h4 className='about-me__skills-title'>Technical Skills</h4>
          <div className='about-me__skills'>
            {technicalSkills.map((skill) => (
              <span key={skill} className='skill-pill'>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;