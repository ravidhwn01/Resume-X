import React from 'react'
import InputText from './InputText'
import TextArea from './TextArea';



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

  const generateCV = () => {
    let name = document.getElementById("name") as HTMLInputElement;
    let contact = document.getElementById("contact") as HTMLInputElement;
    let email = document.getElementById("email") as HTMLInputElement;
    let address = document.getElementById("address") as HTMLInputElement;
    let github = document.getElementById("github") as HTMLInputElement;
    let linkedIn = document.getElementById("linkedIn") as HTMLInputElement;
    let objective = document.getElementById("objective") as HTMLInputElement;

    let weHTML = document.getElementsByClassName("weField");
    let str = "";
    for (let e of weHTML as any) {
      str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT")!.innerHTML = str;

    let aqHTML = document.getElementsByClassName("eqField");
    let str2 = "";
    for (let e of aqHTML as any) {
      str2 = str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT")!.innerHTML = str2;

    
    document.getElementById("nameT1")!.innerHTML = name.value;
    document.getElementById("nameT2")!.innerHTML = name.value;
    document.getElementById("contactT")!.innerHTML = contact.value;
    document.getElementById("emailT")!.innerHTML = email.value;
    document.getElementById("addressT")!.innerHTML = address.value;
    document.getElementById("githubT")!.innerHTML = github.value;
    document.getElementById("inkedT")!.innerHTML = linkedIn.value;
    document.getElementById("objectiveT")!.innerHTML = objective.value;
    
    // document.getElementById("cv-form")!.style.display = "none";
    // document.getElementById("cv-template")!.style.display = "block";
  }

  const printCV = ()=>{
    window.print();
  }



  return (
    <>
      <div className="container" id="cv-form">
        <h1 className="text-center">R&#232;sume-X</h1>
        <p className="text-center">The Fastest R&#232;sume Maker Website</p>
        <div className="row">
          <div className="col-md-6 p-5">
            <h1 className="text-center">Personal Information</h1>
            <div className="form-group">
              <label htmlFor="name"> Name</label>
              <InputText
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact"> Contact</label>
              <InputText
                type="text"
                className="form-control"
                id="contact"
                placeholder="Enter Your Contact "
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact"> Email </label>
              <InputText
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter Your email "
              />
            </div>
            <div className="form-group">
              <label htmlFor="address"> Address</label>
              <TextArea
                type="text"
                className="form-control"
                id="address"
                rows='3'
                placeholder="Enter Your Address "
              ></TextArea>
            </div>

            <div className="links">
              <h4 className="text-center m-3">Important Links</h4>
              <div className="form-group">
                <label htmlFor="github">github</label>
                <InputText
                  type="text"
                  className="form-control"
                  id="github"
                  placeholder="Enter here "
                />
              </div>
              <div className="form-group">
                <label htmlFor="linkedIn">linkedIn</label>
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
              <label htmlFor="objective">Objective</label>
              <TextArea
                id="objective"
                type="text"
                className="form-control"
                placeholder="Enter here "
              ></TextArea>
            </div>
            <div className="form-group" id="we">
              <label htmlFor="objective">Work Experience</label>

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
              <label htmlFor="objective">Academic Qualification</label>
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

          <div className="container mt-3 mb-3 text-center">
            <button
              onClick={generateCV}
              className="btn btn-light">
              Generate CV
            </button>
          </div>
        </div>
      </div>

      {/* cv template */}
      <div className="container" id="cv-template">
        <div className="row " id="cvtemplt">
          <div className="col-md-4 ">
            {/* <img src="/images/signn22.jpg" className="img-fluid" alt="loading..."/> */}

            <p id="nameT1" >ravi kumar dhawan</p>
            <p id="contactT" >+91-12423423523,+91-3464356436</p>
            <p id="emailT" >xyz@xyz.com</p>
            <p id="addressT" >23-c sector delhi</p>

            <p  > <a id="githubT" href="#1"> </a></p>
            <p  > <a id="inkedT" href="#1"> </a></p>
          </div>
          <div className="col-md-8 ">

            <h1 id="nameT2" >ravi kumar dhawan</h1>

            <div className="card">
              <div className="card-header">
                <div className="card-body">
                  <h3>Objective</h3>
                  <p id="objectiveT" >to become a web developer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quo nemo maiores! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, doloremque asperiores. Sint to become a web developer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quo nemo maiores! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, doloremque asperiores. Sint. </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="card-body">
                  <h3>Work Experience</h3>
                  <ul id="weT" >
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sed.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sed.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sed.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="card-body">
                  <h3>Academic Qualification</h3>
                  <ul id="aqT" >
                    <li>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque fugit explicabo dicta.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sed.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sed.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="container mt-3 text-center">
          <button
          onClick={printCV} className="btn btn-light"
          >
            print CV
          </button>
        </div>
      </div>

    </>
  )
}

export default CvForm
