import React, { useRef, useState, useEffect } from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { contact } from '../../portfolio'; // Adjust path

import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    message: '',
    isError: false,
  });
  const iconMap = {
    Email: <FiMail />,
    LinkedIn: <FiLinkedin />,
    GitHub: <FiGithub />,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        setModalState({
          isOpen: true,
          title: 'Success!',
          message: 'Your message has been sent. I will get back to you shortly.',
          isError: false,
        });
        e.target.reset();
      }, (error) => {
        setModalState({
          isOpen: true,
          title: 'Error',
          message: `Failed to send message: ${error.text}. Please try again.`,
          isError: true,
        });
      });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, title: '', message: '', isError: false });
  };

  // Effect to handle the Escape key press for the modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (modalState.isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalState.isOpen]); // Only re-run if isOpen changes

  return (
    <>
      <section className='section contact center' id='contact'>
        <h2 className='section__title'>{contact.title}</h2>
        <p className='contact__subtitle'>{contact.subtitle}</p>

        <div className='contact__container'>
          <div className='contact__info'>
            <h3 className='contact__info-title'>Get in Touch</h3>
            <p className='contact__info-desc'>{contact.description}</p>
            <ul className='contact__info-list'>
              {contact.info.map((item) => (
                <li key={item.text} className='contact__info-item'>
                  <span className='contact__info-icon'>{item.icon}</span> {item.text}
                </li>
              ))}
            </ul>
          </div>

          <form ref={form} onSubmit={sendEmail} className='contact__form'>
            <input type="text" name="from_name" placeholder='Your Name' className='contact__form-input' required />
            <input type="email" name="from_email" placeholder='Your Email' className='contact__form-input' required />
            <textarea name="message" placeholder='Your Message' className='contact__form-textarea' required />
            <button type="submit" className='btn btn--primary contact__form-btn'>Send Message →</button>

            {/* The Modal JSX with accessibility fixes */}
            {modalState.isOpen && (
              <div
                className="modal-overlay"
                onClick={closeModal}
              >
                <div
                  className={`modal-content ${modalState.isError ? 'error' : 'success'}`}
                  onClick={(e) => e.stopPropagation()}
                  role="dialog"             // FIX: Identifies the element as a modal dialog
                  aria-modal="true"          // FIX: Tells screen readers to trap focus
                  aria-labelledby="modal-title" // FIX: Links the dialog to its title
                >
                  <h3 id="modal-title" className="modal-title">{modalState.title}</h3>
                  <p className="modal-message">{modalState.message}</p>
                  <button
                    type="button"           // FIX: Adds the explicit type attribute
                    className="modal-close-btn"
                    onClick={closeModal}
                    aria-label="Close modal" // Good practice for accessibility
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className='contact__socials'>
          {/* 3. Update the JSX to use the new styles and icons */}
          {contact.social.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='social-button'
            >
              {iconMap[link.name]}
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </section>
    </>

  );
};

export default Contact;