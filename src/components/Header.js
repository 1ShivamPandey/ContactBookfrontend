import React, { useEffect, useState } from "react";
import "../assets/css/Header.css";
import Signout from "../assets/headerIcons/power-off.png";
import User from "../assets/headerIcons/user.png";
import notification from "../assets/headerIcons/notification.png";
import Group from "../assets/headerIcons/group.png";
import login from "../assets/headerIcons/login.png"
import FancyText from "@carefully-coded/react-text-gradient";
import { Link, useNavigate } from "react-router-dom";
export default function Header() {
  const [menuOpen, setmenuOpen] = useState(false);
  const [AuthData, setAuthData] = useState(null);
  const navigate = useNavigate();
  const handlehamburger = () => {
    setmenuOpen(!menuOpen);
  };

  const logout = () => {
    localStorage.removeItem("AuthData");
    navigate("/login");
    window.location.reload();
    setAuthData(null);
    alert("Logout");

  };

  useEffect(() => {
    const AuthData = localStorage.getItem("AuthData");
    setAuthData(AuthData);
  }, []);

  return (
    <div className="headerbody">
      <div className="headerflex">
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <FancyText
              gradient={{ from: "#F858E0", to: "#77156C", type: "linear" }}
              animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
              animateDuration={2000}
              style={{ fontSize: 35, fontFamily: "monospace" }}
            >
              𝐀𝐝𝐝𝐫𝐞𝐬𝐬 𝐁𝐨𝐨𝐤
            </FancyText>
          </Link>
        </div>

        <div className="hamburger" onClick={handlehamburger}>
          &#9776;
        </div>

        <div className={`headerRightSide ${menuOpen ? "open" : ""}`}>
          <div>
            <img style={{ height: "45px", width: "45px" }} src={Group} />
          </div>

          <div>
            <img style={{ height: "45px", width: "45px" }} src={notification} />
          </div>

          <div>
            <img style={{ height: "45px", width: "45px" }} src={User} />
          </div>
          {AuthData === null ? (
            <Link to="/Login">
              <img  style={{ height: "45px", width: "45px" }} src={login} />
              </Link>
          ) : (
            <div>
              <img onClick={logout} style={{ height: "45px", width: "45px" }} src={Signout} />
            </div>
          )}

          {/* <div>Setting</div>
          <div>Signup</div>
          <div>Login</div> */}
        </div>
      </div>
    </div>
  );
}
