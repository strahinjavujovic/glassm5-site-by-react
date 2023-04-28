import React from "react";
import { useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function TenthPage (){
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);    
    const [third, setThird] = useState(false);
    const [fourth, setFourth] = useState(false);
    return(
        <div className="tenthPage">
            <div className="row">
                <div className="content">
                    <h2>Frequently Asked Questions</h2>
                    <div className="question">
                        <div className="question-button" onClick={()=>setFirst(!first)}>
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <FontAwesomeIcon icon={faPlus} className={first ? "button clicked" : "button"} />
                        </div>
                        <div className={first ? "answer show" : "answer"} >
                            <p>Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, voluptas explicabo molestiae tempore natus velit sed aliquam ut! Culpa asperiores, error ullam qui! Commodi nobis distinctio aperiam totam perferendis quas.</p>
                        </div>
                    </div>

                    <div className="question">
                        <div className="question-button" onClick={()=>setSecond(!second)}>
                            <h3>Maecenas vulputate in enim</h3>
                            <FontAwesomeIcon icon={faPlus} className={second ? "button clicked" : "button"}/>
                        </div>
                        <div className={second ? "answer show" : "answer"} >
                            <p>Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, voluptas explicabo molestiae tempore natus velit sed aliquam ut! Culpa asperiores, error ullam qui! Commodi nobis distinctio aperiam totam perferendis quas.</p>
                        </div>
                    </div>
                    <div className="question">
                        <div className="question-button" onClick={()=>setThird(!third)}>
                            <h3>Curabitur ut venenatis urna</h3>
                            <FontAwesomeIcon icon={faPlus} className={third ? "button clicked" : "button"} />
                        </div>
                        <div className={third ? "answer show" : "answer"} >
                            <p>Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, voluptas explicabo molestiae tempore natus velit sed aliquam ut! Culpa asperiores, error ullam qui! Commodi nobis distinctio aperiam totam perferendis quas.</p>
                        </div>
                    </div>
                    <div className="question">
                        <div className="question-button" onClick={()=>setFourth(!fourth)}>
                            <h3>Vestibulum mattis eros</h3>
                            <FontAwesomeIcon icon={faPlus} className={fourth ? "button clicked" : "button"} />
                        </div>
                        <div className={fourth ? "answer show" : "answer"} >
                            <p>Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, voluptas explicabo molestiae tempore natus velit sed aliquam ut! Culpa asperiores, error ullam qui! Commodi nobis distinctio aperiam totam perferendis quas.</p>
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>
    );
}
export default TenthPage;