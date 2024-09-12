import React, { useState } from "react";
import axios from "axios";
import "../../assets/css/form.css";
import InputBox from "../../components/InputBox";
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/contact/login`,
        { email,password }
      );
      console.log(response.data);
      console.log(response.data.UserId.email);
      localStorage.setItem("AuthData",JSON.stringify(response.data))
      navigate("/")
      window.location.reload();
      alert("Logined");
    } catch (error) {
      console.log("Contact not created", error);
    }
  };

  return (
    <div className="box">
      <div className="Container">
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <p style={{color:'red'}}>Admin access : admin@admin.com & password 123</p>
        <form onSubmit={login}>
          <div className="form-group">
            <label>Email :</label>

            <InputBox
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password :</label>

            <InputBox
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="form-group-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
