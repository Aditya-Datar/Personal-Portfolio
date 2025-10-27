import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import uniqid from 'uniqid';
import ProjectContainer from '../ProjectContainer/ProjectContainer'; // Adjust path if needed
import { projects } from '../../portfolio'; // Adjust path if needed

// Import the required CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Projects.css';


const Projects = () => {

  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) setSlidesToShow(1);
      else if (width < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    handleResize(); // run once on mount
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Configuration settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow, // Show 3 projects on larger screens
    slidesToScroll: slidesToShow,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          infinite: true,
          speed: 500
        }
      },
      {
        breakpoint: 600, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <Slider {...settings}>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </Slider>

    </section>
  );
};

export default Projects;