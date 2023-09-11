import React from 'react'
import facebookLogo from "./Images/face.png";
import linked from "./Images/Link.png";
import whatsapp from "./Images/whatsapp.png"
import youtube from "./Images/Youtube.png"
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluid bg-dark bg-gradient text-white" style={{ minHeight: '150px' }}>
            <div className="container">
                <div className="row pt-4 d-flex justify-content-between">
                    <div className="col-md-12 col-lg-3 mb-3">
                        <h1 style={{ fontSize: '1.1rem' }} className="pb-2">ABOUT US</h1>
                        <hr width="60px" style={{ marginTop: '-8px' }} />

                        <p style={{ fontSize: '0.9rem', textAlign: 'justify', fontWeight: '400' }}>Energetic, hardworking,
                            innovative and ambitious person with a great passion for software engineering field.</p>
                    </div>
                    <div className="col-md-12 col-lg-3 mb-3">
                        <h1 style={{ fontSize: '1.1rem' }} className="pb-2">PROJECTS</h1>
                        <hr width="60px" style={{ marginTop: '-8px' }} />

                        <p style={{ fontSize: '0.9rem', textAlign: 'justify', fontWeight: '400' }} id="pharmacy">Grocery App
                        </p>

                        <p style={{ fontSize: '0.9rem', textAlign: 'justify', fontWeight: '400' }} id="hardy">Crud Application</p>

                        <p style={{ fontSize: '0.9rem', textAlign: 'justify', fontWeight: '400' }} id="nic">Chat App</p>
                    </div>
                    <div className="col-md-12 col-lg-3 mb-3 ">
                        <h1 style={{ fontSize: '1.1rem' }} className="pb-2">SOCIAL MEDIA</h1>
                        <hr width="60px" style={{ marginTop: '-8px' }} />

                        <p>
                            <a href="#" style={{ marginRight: '5px' }}><img
                                src={facebookLogo} alt="" width="30px" /></a>
                            <a href="#"
                                style={{ marginRight: '5px' }}><img src={linked} alt=""
                                    width="30px" /></a>
                            <a href="#" style={{ marginRight: '5px' }}><img src={whatsapp} alt=""
                                width="30px" /></a>
                            <a href="#"
                                style={{ marginRight: '5px' }}><img src={youtube} alt=""
                                    width="30px" /></a>
                        </p>
                    </div>
                </div>

                <hr />

                <div className="pb-3" style={{ fontSize: '0.9rem', textAlign: 'justify', fontWeight: '300' }}>Created By <span
                    className="name">Diwyanshu</span> | &#169; 2023 All rights reserved.</div>
            </div>
        </div>
    )
}

export default Footer