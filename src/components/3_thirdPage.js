import React from "react";

import pictureHand from '../images/3page.jpeg';

function thirdPage() {

    return(
        <div className="thirdPage">
                <div className="row">
                    <div className="picture">
                        <img src={pictureHand} alt=''/>
                    </div>
                    <div className="content">
                        <div className="info-button">
                            <h2>Aliquam ut quam sed sapien suscipit vitae.</h2>
                            <div className="button"><li><a href='/'>Get Started</a></li></div>
                        </div>
                        <div className="info-posts">
                            <div className="info">
                                <h3>01. Research</h3>
                                <p>Lorem ipsum dolor sapien amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className="info">
                                <h3>02. Processes</h3>
                                <p>Lorem ipsum dolor sapien amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className="info">
                                <h3>03. Managment</h3>
                                <p>Lorem ipsum dolor sapien amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className="info">
                                <h3>04. Staff</h3>
                                <p>Lorem ipsum dolor sapien amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className="info">
                                <h3>05. Branding</h3>
                                <p>Lorem ipsum dolor sapien amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className="info">
                                <h3>06. Analyze</h3>
                                <p>Lorem ipsum dolor sapien amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );

}

export default thirdPage;