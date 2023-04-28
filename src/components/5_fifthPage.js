import React from "react";

import first from '../images/ourClients/1.png';
import second from '../images/ourClients/2.png';
import third from '../images/ourClients/3.png';
function fifthPage() {

    return(
        <div className="fifthPage">
            <div className="row">
                <h4>our clients</h4>
                <h2>We love to work with our clients </h2>
                <div className="content">
                    <div className="card">
                        <img src={first} alt=""/>
                    </div>
                    <div className="card">
                        <img src={second} alt=""/>
                    </div>
                    <div className="card">
                        <img src={third} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default fifthPage;