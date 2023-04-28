import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faComputerMouse } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

function secondPage() {

        return(
            <div className="secondPage">
                <div className="row">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing. Ut eu risus eget sapien.</h2>
                        <div className="cards-post">
                            <div className="card">
                                <div className="icon">
                                <FontAwesomeIcon icon={faLightbulb} />
                                </div>
                                <h5>Branding</h5>
                                <p>Lorem ipsum dolor sapien amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className="card">
                                <div className="icon">
                                <FontAwesomeIcon icon={faUser} />
                                </div>
                                <h5>Photography</h5>
                                <p>Lorem ipsum dolor sapien amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className="card">
                                <div className="icon">
                                <FontAwesomeIcon icon={faPalette} />
                                </div>
                                <h5>Design</h5>
                                <p>Lorem ipsum dolor sapien amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className="card">
                                <div className="icon">
                                <FontAwesomeIcon icon={faComputerMouse} />
                                </div>
                                <h5>Managment</h5>
                                <p>Lorem ipsum dolor sapien amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className="card">
                                <div className="icon">
                                <FontAwesomeIcon icon={faGear} />
                                </div>
                                <h5>Processes</h5>
                                <p>Lorem ipsum dolor sapien amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className="card">
                                <div className="icon">
                                <FontAwesomeIcon icon={faUsers} />
                                </div>
                                <h5>Staff</h5>
                                <p>Lorem ipsum dolor sapien amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>
                </div>
            </div>
        );
    
}
export default secondPage;