import React from "react";
import './CSS/Footer.css'

function Footer(){
    return(
        <>
        <div className="footer">
      <div className="top">
        <div>
            <h1>Medigo</h1>
            <p>Get your medicine at home...</p>
        </div>
        <div>
            <a href="/">
            <i class="fa-brands fa-facebook-square"></i>
            </a>
            <a href="/">
            <i class="fa-brands fa-instagram-square"></i>
            </a>
            <a href="/">
            <i class="fa-brands fa-twitter-square"></i>
            </a>
            <a href="/">
            <i class="fa-brands fa-whatsapp-square"></i>
            </a>
        </div>
      </div>
      <div className="bottom">
        <div>
            <h4>Project</h4>
            <a  href="/">Changelog</a><br/>
            <a  href="/">Status</a><br/>
            <a  href="/">License</a><br/>
            <a  href="/">All Version</a><br/>
            
        </div>
        <div>
            <h4>Community</h4>
            <a  href="/">GitHub</a><br/>
            <a  href="/">Issues</a><br/>
            <a  href="/">Project</a><br/>
            <a  href="/">twitter</a><br/>
            
        </div>
        <div>
            <h4>Help</h4>
            <a  href="/">Support</a><br/>
            <a  href="/">Troubleshooting</a><br/>
            <a  href="/">Contact Us</a><br/>
         
            
        </div>
        <div>
            <h4>Other</h4>
            <a  href="/">Team of Service</a><br/>
            <a  href="/">Privacy</a><br/>
            <a  href="/">Policy</a><br/>
            <a  href="/">License</a><br/>
         
         
            
        </div>
        </div>
    </div>
        </>
    )
}

export default Footer;