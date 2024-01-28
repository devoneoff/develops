import React from 'react';
import './Contact.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContacMe = () => {
    return (
        <section className='contact-container' id="contact">
            <h5>Contact Me</h5>
            <div className='contact-content'>
                <div style={{ flex: 1 }}>
                    <ContactInfoCard
                        iconUrl="./assets/images/email.png"
                        text="John@timetiprogram.com"
                    />
                    <ContactInfoCard
                        iconUrl="./assets/images/github.png"
                        text="https://github.com/time-to-program"
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContacMe;