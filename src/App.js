import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
      <div className="w3-row-padding">
        <div className="w3-third">

          <div className="w3-white w3-text-grey w3-card-4">
            <div className="w3-display-container">
              <img src="rahul.jpg" style={{ width: "100%" }} alt="Avatar" />
              <div className="w3-display-bottomleft w3-container w3-text-black">
                <h2 style={{ color: "#000" }}>Rahul Netrapal</h2>
              </div>
            </div>
            <div className="w3-container">
              <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Associate Manager
                (White Label)</p>
              <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>New Delhi</p>
              <p><i
                className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>rahulnetrapal@gmail.com
              </p>
              <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>8447777381</p>
              <hr />

              <p className="w3-large"><b><i
                className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
              <p>MS Office</p>
              <div className="w3-light-grey w3-round-xlarge w3-small">
                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: "90%" }}>90%</div>
              </div>
              <p>Basics of Internet</p>
              <div className="w3-light-grey w3-round-xlarge w3-small">
                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: "80%" }}>
                  <div className="w3-center w3-text-white">80%</div>
                </div>
              </div>
              <br />

              <p className="w3-large w3-text-theme"><b><i
                className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
              <p>Hindi</p>
              <div className="w3-light-grey w3-round-xlarge">
                <div className="w3-round-xlarge w3-teal" style={{ height: "24px", width: "100%" }}></div>
              </div>
              <p>English</p>
              <div className="w3-light-grey w3-round-xlarge">
                <div className="w3-round-xlarge w3-teal" style={{ height: "24px", width: "55%" }}></div>
              </div>
              <br />
            </div>
          </div><br />
        </div>
        <div className="w3-twothird">

          <div className="w3-container w3-card w3-white w3-margin-bottom">
            <h2 className="w3-text-grey w3-padding-16"><i
              className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience
            </h2>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>Associate Manager (White Label) / Graposs Edutech Pvt. Ltd</b></h5>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Feb 2016 - <span
                className="w3-tag w3-teal w3-round">Current</span></h6>
              <p>Responsibilities:</p>
              <ul>
                <li>Customer Support to B2B Client & student</li>
                <li>Integrate website</li>
                <li>Providing administrative support in the organization.</li>
                <li>Providing sales, support and services to the clients.</li>
              </ul>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>Customer Support Officer (Assistant)</b></h5>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2012 - Feb 2016
              </h6>
              <p>Responsibilities</p>
              <ul>
                <li>Check to ensure that appropriate changes were made to resolve customers' problems.</li>
                <li>Complete contract forms, prepare change of address records, and issue service
                  discontinuance orders, using computers.</li>
                <li>Confer with customers by telephone or in person in order to provide information about
                  products and services, to take orders or cancel accounts, or to obtain details of
                  complaints.</li>
                <li>Contact customers in order to respond to inquiries or to notify them of claim investigation
                  results and any planned adjustments.</li>
                <li>Determine charges for services requested, collect deposits or payments, and/or arrange for
                  billing.</li>
                <li>Keep records of customer interactions and transactions, recording details of inquiries,
                  complaints, and comments, as well as actions taken</li>
              </ul>
              <hr />
            </div>
          </div>

          <div className="w3-container w3-card w3-white">
            <h2 className="w3-text-grey w3-padding-16"><i
              className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>10th from CBSE</b></h5>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2011</h6>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>12th from NIOS</b></h5>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2014</h6>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>B.A</b></h5>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Delhi University
              </h6>
              <p>Bachelor Degree</p><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
