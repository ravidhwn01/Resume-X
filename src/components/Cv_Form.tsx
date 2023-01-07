import React, { useState } from "react";

const CvForm = () => {
  const addNewWEField = () => {
    let newNode = document.createElement("textarea");
    newNode.className = "form-control weField";
    newNode.rows = 3;
    newNode.classList.add("mt-2");
    newNode.placeholder = "Enter here";
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb?.insertBefore(newNode, weAddButtonOb);
  };

  const addNewAQField = () => {
    let newNode = document.createElement("textarea");
    newNode.className = "form-control eqField";
    newNode.rows = 3;
    newNode.classList.add("mt-2");
    newNode.placeholder = "Enter here";
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    aqOb?.insertBefore(newNode, aqAddButtonOb);
  };

  const [resumeForm, setResumeForm] = useState({
    name: "",
    contact: "",
    address: "",
    facebook: "",
    instagram: "",
    github: "",
    linkedin: "",
    objective: "",
  });

  const handleInput = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    console.log(value);

    setResumeForm({ ...resumeForm, [name]: value });
  };

  const generateCV = (e: any) => {
    e.preventDefault();
    // const newRecord = { ...resumeForm, id: new Date().getTime().toString() };
    document.getElementById("cv-form")!.style.display = "none";
    document.getElementById("cv-template")!.style.display = "block";
  };
  const printCV = () => {
    window.print();
  };

  return (
    <>
      <div className="container" id="cv-form">
        <h1 className="text-center">Resume Maker</h1>
        <p className="text-center">A Most Visitable Site</p>
        <div className="row">
          <div className="col-md-6 p-5">
            <h1 className="text-center">Personal Information</h1>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                value={resumeForm.name}
                onChange={handleInput}
                autoComplete="off"
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Your Name"
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Your Contact</label>
              <input
                value={resumeForm.contact}
                onChange={handleInput}
                autoComplete="off"
                type="text"
                className="form-control"
                id="contact"
                placeholder="Enter Your Contact "
                name="contact"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Your Address</label>
              <textarea
                value={resumeForm.address}
                onChange={handleInput}
                className="form-control"
                id="address"
                placeholder="Enter Your Address "
                name="address"
              ></textarea>
            </div>

            <div className="links">
              <h4 className="text-center m-3">Important Links</h4>

              <div className="form-group">
                <label htmlFor="facebook">facebook</label>
                <input
                  value={resumeForm.facebook}
                  onChange={handleInput}
                  autoComplete="off"
                  type="text"
                  className="form-control"
                  id="facebook"
                  placeholder="Enter here "
                  name="facebook"
                />
              </div>
              <div className="form-group">
                <label htmlFor="instagram">instagram</label>
                <input
                  value={resumeForm.instagram}
                  onChange={handleInput}
                  autoComplete="off"
                  type="text"
                  className="form-control"
                  id="instagram"
                  placeholder="Enter here "
                  name="instagram"
                />
              </div>
              <div className="form-group">
                <label htmlFor="github">github</label>
                <input
                  value={resumeForm.github}
                  onChange={handleInput}
                  autoComplete="off"
                  type="text"
                  className="form-control"
                  id="github"
                  placeholder="Enter here "
                  name="github"
                />
              </div>
              <div className="form-group">
                <label htmlFor="linkedIn">linkedIn</label>
                <input
                  value={resumeForm.linkedin}
                  onChange={handleInput}
                  autoComplete="off"
                  type="text"
                  className="form-control"
                  id="linkedIn"
                  placeholder="Enter here "
                  name="linkedin"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6 p-5">
            <h1 className="text-center">Professional Information</h1>
            <div className="form-group">
              <label htmlFor="objective">Objective</label>
              <textarea
                value={resumeForm.objective}
                onChange={handleInput}
                id="objective"
                className="form-control"
                placeholder="Enter here "
                name="name"
              ></textarea>
            </div>
            <div className="form-group" id="we">
              <label htmlFor="objective">Work Experience</label>
              <textarea

                className="form-control weField"
                placeholder="Enter here "
                name="name"
              ></textarea>

              <div className="container text-center m-3 p-2" id="weAddButton">
                <button
                  onClick={addNewWEField}
                  className="btn btn-light btn-sm"
                >
                  Add More
                </button>
              </div>
            </div>
            <div className="form-group" id="aq">
              <label htmlFor="objective">Academic Qualification</label>
              <textarea
                className="form-control eqField"
                placeholder="Enter here "
                name="name"
              ></textarea>
              <div className="container text-center m-3 p-2" id="aqAddButton">
                <button
                  onClick={addNewAQField}
                  className="btn btn-light btn-sm"
                >
                  Add More
                </button>
              </div>
            </div>
          </div>

          <div className="container mt-3 mb-3 text-center">
            <button onClick={generateCV} className="btn btn-light">
              Generate CV
            </button>
          </div>
        </div>
      </div>

      <div className="container" id="cv-template">
        <div className="row " id="cvtemplt">
          <div className="col-md-4 ">
            <p id="nameT1">{resumeForm.name}</p>
            <p id="contactT">{resumeForm.contact}</p>
            <p id="addressT">{resumeForm.address}</p>

            <p>
              
              <a id="fbT" target="_blank" href={resumeForm.facebook}>
                facebook
              </a>
            </p>
            <p>
              
              <a id="instaT" target="_blank" href={resumeForm.instagram}>
                instagram
              </a>
            </p>
            <p>
              
              <a id="githubT" target="_blank" href={resumeForm.github}>
                
                github
              </a>
            </p>
            <p>
              
              <a id="inkedT" target="_blank" href={resumeForm.linkedin}>
                linkedin
              </a>
            </p>
          </div>
          <div className="col-md-8 ">
            <h1 id="nameT2">{resumeForm.name}</h1>

            <div className="card">
              <div className="card-header">
                <div className="card-body">
                  <h3>Objective</h3>
                  <p id="objectiveT">
                    {resumeForm.objective}
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="card-body">
                  <h3>Work Experience</h3>
                  <ul id="weT">
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, sed.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, sed.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, sed.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="card-body">
                  <h3>Academic Qualification</h3>
                  <ul id="aqT">
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, sed.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, sed.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, sed.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-3 text-center">
          <button onClick={printCV} className="btn btn-light">
            print CV
          </button>
        </div>
      </div>
    </>
  );
};

export default CvForm;
