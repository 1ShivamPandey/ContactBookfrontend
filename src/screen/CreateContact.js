import React, { useState } from "react";
import axios from "axios";
import "../assets/css/form.css";
import InputBox from "../components/InputBox";
import StateAndCities from "./StateAndCities.json"
import { baseURL } from "../Constant";
const CreateContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState();
  const [responseMessage, setresponseMessage] = useState();
  const [isEmailValid, setisEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const [State, setState] = useState("");
  const [District, setDistrict] = useState([]);
  
  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setState(selectedState);
    setDistrict(""); // Clear the district when a new state is selected
  };


  const AddContact = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${baseURL}/api/contact/createContact/`,
        { name, email, phone, password, image,State,District },
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert("Contact is created");
    } catch (error) {
      console.log("Contact not created", error);
      if (error.response.status === 401)
        setresponseMessage("Email or phone is already registered");
    }
  };

  const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailChange = (e) => {
    const newemail = e.target.value;
    setEmail(newemail);

    setisEmailValid(emailregex.test(newemail));
  };

  const phoneRegex = /^\d{10}$/;

  const phoneChange = (e) => {
    const newPhone = e.target.value;
    setPhone(newPhone);

    setIsPhoneValid(phoneRegex.test(newPhone));
  };
  return (
    <div className="box">
      <div className="Container">
        <h2 style={{ textAlign: "center" }}>Add Contact</h2>
        <form onSubmit={AddContact}>
          <div className="form-group">
            <label>Name :</label>
            <InputBox
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email :</label>

            <InputBox
              type="text"
              placeholder="Email"
              value={email}
              onChange={emailChange}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {!isEmailValid && <p style={{color:'red'}}>It is not a valid email</p>}
          <div className="form-group">
            <label>Phone :</label>

            <InputBox
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={phoneChange}
              // onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {!isPhoneValid && <p style={{color:'red'}}>This is not a valid number</p>}

          <div className="form-group">
            <label>Password :</label>

            <InputBox
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
          <label>District : </label>

          <select
          className="form-select"
            value={State}
            onChange={handleStateChange}
          >
            <option value="">--Select State--</option>
            {Object.keys(StateAndCities).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          </div>

          <div className="form-group">

          <label>District</label>

          <select className="form-select"
            value={District}
            onChange={(e) => setDistrict(e.target.value)}
            disabled={!State}
          >
            <option value="">--Select District--</option>
            {State &&
              StateAndCities[State].map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
          </select>
          </div>


          <div className="form-group">
            <label>Image :</label>

            <InputBox
              type="file"
              placeholder="Image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <button className="form-group-button" type="submit">
            Submit
          </button>
          <p style={{ color: "red" }}>{responseMessage}</p>
        </form>
      </div>
    </div>
  );
};
export default CreateContact;
