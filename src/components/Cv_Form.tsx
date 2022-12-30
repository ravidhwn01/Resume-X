import React from 'react'
import InputText from './InputText'
import TextArea from './TextArea';

const CvForm = () => {
  const addNewWEField = () => {
    let newNode = document.createElement("textarea");
    newNode.className = "form-control weField";
    newNode.rows = 3;
    newNode.placeholder = "Enter here";
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb?.insertBefore(newNode, weAddButtonOb);
  };

  const addNewAQField = () => {
    let newNode = document.createElement("textarea");
    newNode.className = "form-control eqField";
    newNode.rows = 3;
    newNode.placeholder = "Enter here";
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    aqOb?.insertBefore(newNode, aqAddButtonOb);
  };


   
  return (
      <>
        <div className="container" id="cv-form">
      <h1 className="text-center">Resume-X</h1>
      <p className="text-center">A Fastest Resume Maker Website</p>
      <div className="row">
        <div className="col-md-6 p-5">
          <h1 className="text-center">Personal Information</h1>
          <div className="form-group">
          <label htmlFor="name">Name</label>
            <InputText
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form-group">
          <label htmlFor="contact">Your Contact</label>
            <InputText
              type="text"
              className="form-control"
              id="contact"
              placeholder="Enter Your Contact "
            />
          </div>
          <div className="form-group">
          <label htmlFor="contact">Your Email Address</label>
            <InputText
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter Your email "
            />
          </div>
          <div className="form-group">
          <label htmlFor="address">Your Address</label>
            <TextArea
              type="text"
              className="form-control"
              id="address"
              rows = '3'
              placeholder="Enter Your Address "
            ></TextArea>
          </div>
         
          <div className="links">
            <h4 className="text-center m-3">Important Links</h4>

            <div className="form-group">
              <InputText
                type="text"
                className="form-control"
                id="facebook"
                placeholder="Enter here "
              />
            </div>
            <div className="form-group">
              <InputText
                type="text"
                className="form-control"
                id="instagram"
                placeholder="Enter here "
              />
            </div>
            <div className="form-group">
              <InputText
                type="text"
                className="form-control"
                id="github"
                placeholder="Enter here "
              />
            </div>
            <div className="form-group">
              <InputText
                type="text"
                className="form-control"
                id="linkedIn"
                placeholder="Enter here "
              />
            </div>
          </div>
        </div>
        

        <div className="col-md-6 p-5">
         
          <h1 className="text-center">Professional Information</h1>
          <div className="form-group">
            <TextArea
            id="objective"
              type="text"
              className="form-control"
              placeholder="Enter here "
            ></TextArea>
          </div>
          <div className="form-group" id="we">
            <TextArea
           
              type="text"
              className="form-control weField"
              rows="3"
              placeholder="Enter here "
            ></TextArea>
          

            <div className="container text-center m-3 p-2" id="weAddButton">
              <button onClick={addNewWEField} className="btn btn-light btn-sm">
                Add More
              </button>
            </div>
          </div>
          <div className="form-group" id="aq">
            <TextArea
              type="text"
              className="form-control eqField"
              rows="3"
              placeholder="Enter here "
            ></TextArea>
            <div className="container text-center m-3 p-2" id="aqAddButton">
              <button onClick={addNewAQField} className="btn btn-light btn-sm">
                Add More
              </button>
            </div>
          </div>
        </div>
       
        {/* <div className="container mt-3 mb-3 text-center">
          <button onClick={generateCV} className="btn btn-light"/>
            Generate CV
       </div> */}
        </div>
        </div>
    
        </>
  )
}

export default CvForm