import React from "react";

function eleventhPage() {
    return(
        <div className="eleventhPage"> 
        <div className="overlay"></div>
            <div className="row">
                <div className="contact">
                    <h4>call us</h4>
                    <h2>(123)456 789 01</h2>
                    <div className="adress">
                        <h5>Address 1:</h5>
                        <p>Boise 2336 Young Road </p>
                    </div>
                    <div className="adress">
                        <h5>Address 2:</h5>
                        <p>Liberty 3924 Traders Alley  </p>
                    </div>
                    <div className="adress">
                        <h5>Address 3:</h5>
                        <p>Chicago 2655 Farland Street </p>
                    </div>
                    <div className="email">
                        <p><span>Email:</span>info@yoursite.com </p>
                    </div>
                </div>
                <div className="form">
                    <div className="inputs">
                        <div className="input">
                            <input type="text" placeholder="Name"></input>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Email"></input>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Subject"></input>
                        </div>
                        <div className="input">
                            <input type="tel" placeholder="Phone"></input>
                        </div>
                        <div className="input-message">
                        <textarea name="comment" form="usrform" placeholder="Message"></textarea>
                        </div>
                        <div className="button">
                            <li><a href="/">Send your message</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default eleventhPage;