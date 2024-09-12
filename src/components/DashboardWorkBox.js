import React from "react";
import "../assets/css/DashboardWorkBox.css"
export default function DashboardWorkBox(props) {
  return (
    <div className="DashboardWorkBox"
      style={{
        background: props.background,
        //   "linear-gradient(135deg, rgb(255, 246, 183) 10%, rgb(246, 65, 108) 100%)",

        // width: "250px",
        // height: "180px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // borderRadius: "10px",
        opacity:props.opacity,
        zIndex:0,
        filter: props.filter,
      }}

    >
      <h3 style={{ color: "white", fontFamily: "monospace", fontSize: 24,zIndex:1,position:'relative'}}>
        {props.Title}
      </h3>
    </div>
  );
}
