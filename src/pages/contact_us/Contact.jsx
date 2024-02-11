import { useState } from "react";
import "./contact.css";
function Contact() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [country, setCountry] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [courseError, setCourseError] = useState("");
  const [countryError, setCountryError] = useState("");

  function submit(e) {
    e.preventDefault();

    if (!name) {
      setNameError("Please enter your name.");
    } else {
      setNameError("");
    }
    if (!password) {
      setPasswordError("Please enter your password");
    } else {
      setPasswordError("");
    }
    if (!gender) {
      setGenderError("Please enter your gender");
    } else {
      setGenderError("");
    }
    if (!course) {
      setCourseError("Please enter your course");
    } else {
      setCourseError("");
    }
    if (!country) {
      setCountryError("Please enter your country");
    } else {
      setCountryError("");
    }
  }
  return (
    <div className="maindiv">
      <h1 style={{ color: "white", marginLeft: "25%" }}>Contact Us</h1>

      <div className="container">
        <form>
          <div className="form-group">
            <label style={{ fontSize: "1.3em" }}>Name</label>
            <input
              type="text"
              placeholder="Enter your name.."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <span className="errorform">{nameError}</span>
          <div className="form-group">
            <label style={{ fontSize: "1.3em" }}>Password</label>
            <input
              type="password"
              placeholder="Enter the password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <span className="errorform">{passwordError}</span>
          <div className="form-vars">
            <label style={{ fontSize: "1.3em" }}>Gender:</label>&nbsp;&nbsp;
            <label style={{ fontSize: "1.1em" }}>Male</label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => {
                setGender(e.target.value ? "Male" : "Not Male");
              }}
            />
            &nbsp; &nbsp; &nbsp;
            <label style={{ fontSize: "1.1em" }}>Female</label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={(e) => {
                setGender(e.target.value ? "Female" : "Not Female");
              }}
            />
          </div>
          <span className="errorform">{genderError}</span>
          <div className="form-course">
            <label style={{ fontSize: "1.3em" }}>Available Courses:</label>
            &nbsp;
            <label style={{ fontSize: "1.1em" }}>React</label>
            <input
              type="checkbox"
              value="react"
              onChange={(e) => {
                setCourse(e.target.checked ? "React" : "");
              }}
            />{" "}
            &nbsp; &nbsp;
            <label style={{ fontSize: "1.1em" }}>Python</label>
            <input
              type="checkbox"
              value="python"
              onChange={(e) => {
                setCourse(e.target.checked ? "Python" : "");
              }}
            />
            &nbsp; &nbsp;
            <label style={{ fontSize: "1.1em" }}>Java</label>
            <input
              type="checkbox"
              value="java"
              onChange={(e) => {
                setCourse(e.target.checked ? "Java" : "");
              }}
            />
          </div>
          <span className="errorform">{courseError}</span>
          <div className="form-select">
            <label style={{ fontSize: "1.3em" }}>Select Your Country:</label>
            <br />
            <select
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            >
              {" "}
              <option value="" style={{ fontSize: "1.1em" }}>
                Select..{" "}
              </option>
              <option value="nepal" style={{ fontSize: "1.1em" }}>
                Nepal
              </option>
              <option value="canada" style={{ fontSize: "1.1em" }}>
                Canada
              </option>
              <option value="switzerland" style={{ fontSize: "1.1em" }}>
                Switzerland
              </option>
            </select>
            <span className="errorform">{countryError}</span>
          </div>
          <div className="form-feed">
            <label style={{ fontSize: "1.3em" }}>Feedback</label>
            <br />
            <input type="textarea" height="" width="100%"></input>
          </div>
          <div className="form-btn">
            <button onClick={submit}>submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
