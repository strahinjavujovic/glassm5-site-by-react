import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook}    from '@fortawesome/free-brands-svg-icons';
import { faInstagram}    from '@fortawesome/free-brands-svg-icons';
import { faTwitter}    from '@fortawesome/free-brands-svg-icons';
function footer() {
    return(
        <div className="footer">
            <div className="row">
                <div className="first-content">
                    <div className="call-us">
                        <h4>call us</h4>
                        <h2>(123)456 789 012</h2>
                    </div>
                    <div className="visit-us">
                        <h4>visit us</h4>
                        <h3>Liberty 3924 Traders Alley </h3>
                        <h3>office@yoursite.com</h3>
                    </div>
                    <div className="social">
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                </div>
                <div className="second-content">
                    <div className="about-us">
                        <h5>About Us</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices risus eget nunc ullamcorper, ut consectetur eros mattis. Convallis fringilla arcu consequat condimentum lectus.</p>
                    </div>
                    <div className="links">
                        <div>
                            <h6>Company</h6>
                               <li><a href="/">About</a></li><div></div>
                                <li><a href="/">Jobs</a></li><div></div>
                                <li><a href="/">Contacts</a></li><div></div>
                                <li><a href="/">Blog</a></li><div></div>
                        </div>
                        <div>
                            <h6>Themes</h6>
                                <li><a href="/">Features</a></li><div></div>
                                <li><a href="/">Team</a></li><div></div>
                                <li><a href="/">Pricing</a></li><div></div>
                                <li> <a href="/">Info</a></li><div></div>
                        </div>
                        <div>
                            <h6>Support</h6>
                                <li><a href="/">Contacts</a></li><div></div>
                                <li><a href="/">Testimonials</a></li><div></div>
                                <li><a href="/">Terms of Service</a></li><div></div>
                                <li><a href="/">Help</a></li><div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default footer;