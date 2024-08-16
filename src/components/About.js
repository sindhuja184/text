import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function About(props) {
  // Define styles for light and dark modes
  const myStyle = {
    color: props.mode === 'light' ? 'black' : 'white',
    backgroundColor: props.mode === 'light' ? 'white' : '#343a40',
  };

  const accordionStyle = {
    backgroundColor: props.mode === 'light' ? '#f8f9fa' : '#212529',
  };

  return (
    <div className="container">
      <h1 style={{color: props.mode === 'light' ? 'black' : 'white' }}>About Us</h1>
      <div className="accordion" id="accordionExample" style={accordionStyle}>
        <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343a40' }}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ backgroundColor: props.mode === 'light' ? '#e9ecef' : '#495057', color: props.mode === 'light' ? 'black' : 'white' }}
            >
              Features
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
              <ul>
                <li>Lower Case</li>
                <li>Upper Case</li>
                <li>Clear</li>
                <li>Search</li>
                <li>Preview</li>
                <li>Light and Dark</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343a40' }}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{ backgroundColor: props.mode === 'light' ? '#e9ecef' : '#495057', color: props.mode === 'light' ? 'black' : 'white' }}
            >
              Overview
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
              Flexible app which can be used to format our text
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343a40' }}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{ backgroundColor: props.mode === 'light' ? '#e9ecef' : '#495057', color: props.mode === 'light' ? 'black' : 'white' }}
            >
              Motto
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
              To learn react
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
