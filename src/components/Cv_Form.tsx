import React from 'react'
import InputText from './InputText'
import TextArea from './TextArea';

const CvForm = () => {

    const addNewWEField =()=> {
        let newNode = document.createElement("textarea");
        newNode.classList.add("form-control");
        newNode.classList.add("weField");
        newNode.classList.add("mt-2");
        newNode.setAttribute("placeholder", "Enter here");
        let weOb = document.getElementById("we");
        let weAddButton = document.getElementById("weAddButton");
        // weOb.insertBefore(newNode, weAddButton);
      }
      const addNewAQField = ()=> {
        let newNode = document.createElement("textarea");
        newNode.classList.add("form-control");
        newNode.classList.add("eqField");
        newNode.classList.add("mt-2");
        newNode.setAttribute("placeholder", "Enter here");
        let aqOb = document.getElementById("aq");
        let aqAddButton = document.getElementById("aqAddButton");
        // aqOb.insertBefore(newNode, aqAddButton);
      }
  return (
      <>
        <div className="container" id="cv-form">
      <h1 className="text-center">Resume Maker</h1>
      <p className="text-center">A Most Visitable Site</p>
      <div className="row">
        <div className="col-md-6 p-5">
         
          <h1 className="text-center">Personal Information</h1>
          <div className="form-group">
            <InputText
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form-group">
            <InputText
              type="text"
              className="form-control"
              id="contact"
              placeholder="Enter Your Contact "
            />
          </div>
          <div className="form-group">
            <TextArea
              type="text"
              className="form-control"
              id="address"
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
              <button onClick={addNewWEField} className="btn btn-light btn-sm">
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