import React, { useState } from "react";
import axios from "axios";
import "../assets/css/form.css";
import InputBox from "../components/InputBox";
const CreateContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState();
  const [responseMessage, setrespoonseMessage] = useState();
  const [isEmailValid, setisEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const AddContact = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/contact/createContact/`,
        { name, email, phone, password, image },
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
        setrespoonseMessage("Email or phone is already registered");
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
