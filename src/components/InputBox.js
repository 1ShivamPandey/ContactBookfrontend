import React from "react";

export default function InputBox(props) {
  return (
    <input
      style={{
        borderRadius: "5px",
        borderColor: "#d3d3d3",
        border: "2px solid #d3d3d3",
        boxSizing: "border-box",
        width: "100%",
        padding:'10px'
      }}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
}
