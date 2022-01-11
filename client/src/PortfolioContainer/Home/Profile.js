import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

export default function Profile(){
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='https://www.linkedin.com/in/shrey-arora-csp/'>
                            <i class='fa fa-linkedin'></i>
                        </a>
                        <a href='https://www.instagram.com/shrey_arora1967'>
                            <i class='fa fa-instagram'></i>
                        </a>
                        </div>  
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Shrey</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Cybersecurity Engineer🌐",
                                    1000, 
                                    "Front-end Enthusiast💻",
                                    1000,
                                    "Cybersecurity Engineer🌐",
                                    1000,
                                ]}
                                />
                            </h1>
                        <span className='profile-role-tagline'>
                            Driven & Motivated to work in cybersecurity and front-end operations.
                        </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href="Resume_2022.pdf" download='Shrey Resume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    )
}