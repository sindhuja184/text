import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color :'white',
        backgroundColor :'black'
    })
    const [btntext, setbtntext] = useState("Enable Dark Mode");

    const toggleStyle = () => {
        if(myStyle.color == 'white'){
            setMyStyle({
                color : 'black',
            backgroundColor : 'white'
            })
            setbtntext("Enable dark mode");
        }
        else{
            setMyStyle({
                color :'white',
                backgroundColor :'black'
            })
            setbtntext("Enable light mode");
        }
    }
    
  return (
    <div className = "container" style = {myStyle}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
        {/* myStyle is an object */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes.
          </div>
        </div>
      </div>
      <div className='container my-3'>
      <button className = "btn btn-primary " onClick={toggleStyle}>{btntext}</button>
      </div>
    </div>
    </div>
  );
}
