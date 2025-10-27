import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { TypeAnimation } from 'react-type-animation';
import HeroInfoCards from '../HeroInfoCards/HeroInfoCards';
import { about, projects, aboutMe } from '../../portfolio'
import './About.css'


const About = () => {
  const { name, role, description, resume, social, picture, roles } = about
  return (
    <>

      <div className='stars-container'>
        <div className='stars' />
        <div className='stars2' />
        <div className='stars3' />
        <div className='stars4' />
      </div>

      <div className='about center'>

        <div className='about__header'>
          {/* {picture && (
            <img
              src={
                picture.startsWith('http')
                  ? picture
                  : `${process.env.PUBLIC_URL}/images/${picture}`
              }
              alt={name}
              className='about__picture'
            />
          )} */}

          <div className='about__intro'>
            {name && (
              <>
                <h5>Hi, I am</h5>
                <h1>
                  <span className='about__name'>{name}</span>
                </h1>
              </>

            )}

            {roles && (
              <TypeAnimation
                sequence={roles.flatMap((someRole) => [
                  `${someRole}`,   // The text to be typed
                  2000,     // The pause duration after typing
                ])}
                wrapper="h2" // This will render an <h2> element
                speed={1}   // Typing speed
                className="about__role" // Your original class name
                repeat={Infinity} // This will make the animation loop
              />
            )}
            <p className='about__desc'> <HeroInfoCards /></p>
          </div>
        </div>

        <div className='about__contact center'>
          {resume && (
            <a href={resume}>
              <span type='button' className='btn btn--outline'>
                Resume
              </span>
            </a>
          )}

          {social && (
            <>
              {aboutMe && (
                <a href='#about-me'>
                  <span type='button' className='btn btn--outline'>
                    About Me
                  </span>
                </a>
              )}

              {projects && (
                <a href='#projects'>
                  <span type='button' className='btn btn--outline'>
                    View Projects
                  </span>
                </a>
              )}
            </>
          )}
        </div>
      </div>
      <div className="bg-glow">
        <div className="bg-glow__big" />
        <div className="bg-glow__small" />
      </div>
      <a href="#about-me" className="scroll-indicator-link">
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"/>
          </div>
          <span className="scroll-text">Scroll</span>
        </div>
      </a>

    </>

  )
}

export default About
