import React from "react";
import "./Contact.scss";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail, AiOutlineLink, AiOutlineLinkedin, AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <div class="contact-card">
          <h4 className="contact-heading">Contact me</h4>
          <h1>Contact me to get your work done</h1>
          <div className="row">
            <div className="col-sm-4">
              <div className="row">
                <div className="col-3">
                  <div className="my-3 custom-contact-btn">
                    <h3>
                      <BsTelephone />
                    </h3>
                  </div>
                </div>
                <div className="col-9 align-self-center">
                  <div className="my-3">
                    <h6>
                      <a className="text-decoration-none text-dark" href="tel:+923264600926">
                        +92326-4600926
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <div className="my-3 custom-contact-btn">
                    <h3>
                      <AiOutlineMail />
                    </h3>
                  </div>
                </div>
                <div className="col-9 align-self-center ">
                  <div className="my-3">
                    <h6>
                      <a className="text-decoration-none text-dark" href="mailto:tayyabnaqvi55@gmail.com">
                        tayyabnaqvi55@gmail.com
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <div className="my-3 custom-contact-btn">
                    <h3>
                      <AiOutlineLink />
                    </h3>
                  </div>
                </div>
                <div className="col-9 align-self-center">
                  <div className="my-3">
                    <h1 className="d-flex justify-content-between">
                      <a target="_blank" className="social-link" href="https://github.com/MuhammadTayyab55/Tayyab">
                        <AiOutlineGithub />
                      </a>
                      <a target="_blank" className="social-link" href="https://www.linkedin.com/in/tayyab-naqvi-422207169/">
                        <AiOutlineLinkedin />
                      </a>
                      <a target="_blank" className="social-link" href="#">
                        <AiOutlineFacebook />
                      </a>
                      <a target="_blank" className="social-link" href="https://instagram.com/s.rand07?igshid=NTdlMDg3MTY=">
                        <AiOutlineInstagram />
                      </a>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
