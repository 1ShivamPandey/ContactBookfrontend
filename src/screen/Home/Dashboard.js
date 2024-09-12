import React, { useEffect, useState } from "react";
import "../../assets/css/Dashboard.css";
import DashboardWorkBox from "../../components/DashboardWorkBox";
import home from "../../assets/home.png";
import { Link } from "react-router-dom";
export default function Dashboard() {
  const [AuthData, setAuthData] = useState(null);
  const [AuthRole, setAuthRole] = useState("");


  useEffect(() => {
    const authData = localStorage.getItem("AuthData");
    // const parsedData = JSON.parse(AuthData);
    // setAuthData(parsedData);
    // setAuthRole(parsedData.UserId.role)
    // console.log("the role is", parsedData.UserId.role);


    if (authData) {
      const parsedData = JSON.parse(authData);
      setAuthData(parsedData);
      setAuthRole(parsedData?.UserId?.role || ""); // Add safe access to role
      console.log("The role is", parsedData?.UserId?.role);
    }
  }, []);

  return (
    <div className="Dashboard">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            // backgroundColor: "#663dff",
            //   marginLeft:'50px',
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(110.6deg, rgb(184, 142, 252) 2.2%, rgb(104, 119, 244) 100.2%)",
            // background: 'linear-gradient(to bottom, #fb83fa 50%,#e93cec 100%',
            borderRadius: "5px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          }}
        >
          <img style={{ maxHeight: "50%", maxWidth: "50%" }} src={home} />
        </div>

        <h3 style={{ color: "black" }}>Dashboard 
          {/* {AuthData?.UserId?.email || "Guest"} */}
          </h3>
      </div>

      <div className="Dashboard-Container">
        <Link to="/CreateContact" style={{ textDecoration: "none" }}>
          <DashboardWorkBox
            Title="Add Contact"
            background="linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)"
          />
        </Link>

        {AuthRole === "Admin" ? (
          <Link to="/EditContact" style={{ textDecoration: "none" }}>
          <DashboardWorkBox
            Title="Update Contact"
            background="linear-gradient(135deg, rgb(255, 246, 183) 10%, rgb(246, 65, 108) 100%)"
          />
        </Link>
         
        ) : (
          <DashboardWorkBox
          Title="🔒"
          opacity="0.5"
          // filter="blur(10px)"
          background="linear-gradient(135deg, rgb(255, 246, 183) 10%, rgb(246, 65, 108) 100%)"
        />
        )}

        <Link to="/CreateContact" style={{ textDecoration: "none" }}>
          <DashboardWorkBox
            Title="Delete Contact"
            background="linear-gradient(110.6deg, rgb(184, 142, 252) 2.2%, rgb(104, 119, 244) 100.2%)"
          />
        </Link>

        <Link to="/CreateContact" style={{ textDecoration: "none" }}>
          <DashboardWorkBox
            Title="Pause Contact"
            background="radial-gradient(circle at 4.3% 10.7%, rgb(138, 118, 249) 13.6%, rgb(75, 252, 235) 100.7%)"
          />
        </Link>
      </div>
    </div>
  );
}
