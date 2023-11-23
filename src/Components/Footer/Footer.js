import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div id="footer" className="container">
      <div className="d-flex justify-content-between my-4 mt-5">
        <h4 className="mb-0">
          Develop by <span style={{ color: "var(--orange)" }}>Tayyab Naqvi</span>
        </h4>
        <h4 className="d-flex mb-0 align-self-center">
          <a href="https://github.com/MuhammadTayyab55/Tayyab" target="_blank" className="text-dark me-3">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/tayyab-naqvi-422207169/" target="_blank" className="text-dark me-3">
            <AiFillLinkedin />
          </a>
        </h4>
      </div>
    </div>
  );
}
export default Footer;
