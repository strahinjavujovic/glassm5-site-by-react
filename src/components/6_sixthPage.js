import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook}    from '@fortawesome/free-brands-svg-icons';
import { faInstagram}    from '@fortawesome/free-brands-svg-icons';
import { faTwitter}    from '@fortawesome/free-brands-svg-icons';

import pic1 from '../images/team/team2.jpg';
import pic2 from '../images/team/team1.jpg';
import pic3 from '../images/team/team3.jpg';

function sixthPage(){

    return(
        <div className='sixthPage'> 
            <div className='row'>
                <h4>our team</h4>
                <h2>Lorem ipsum dolor sit amet, consectetur eget. </h2>
                <div className='content'>
                    <div className='card' style={{backgroundImage:`url(${pic1})`}}>
                    <div className='info' >
                                <h6>Designer</h6>
                                <h5>James Brown</h5>
                                <div className='icons'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                    <FontAwesomeIcon icon={faInstagram} />
                                    <FontAwesomeIcon icon={faTwitter} />
                                </div>
                            </div>
                        </div>
                        <div className='card' style={{backgroundImage:`url(${pic2})`}}>
                            <div className='info'>
                                <h6>Designer</h6>
                                <h5>James Brown</h5>
                                <div className='icons'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                    <FontAwesomeIcon icon={faInstagram} />
                                    <FontAwesomeIcon icon={faTwitter} />
                                </div>
                            </div>
                        </div>
                        <div className='card' style={{backgroundImage:`url(${pic3})`}}>
                        <div className='info'>
                                <h6>Designer</h6>
                                <h5>James Brown</h5>
                                <div className='icons'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                    <FontAwesomeIcon icon={faInstagram} />
                                    <FontAwesomeIcon icon={faTwitter} />
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default sixthPage;