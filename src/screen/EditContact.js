import axios from "axios";
import React, { useEffect, useState } from "react";
import InputBox from "../components/InputBox";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../assets/css/EditContact.css";
import deleteicon from "../assets/delete.png";
import { baseURL } from "../Constant";
export default function EditContact() {
  const [contactData, setContactData] = useState([]);
  // const [name, setName] = useState("");

  const getContact = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/api/contact/getContact/`
      );
      console.log("The response is", response.data);
      setContactData(response.data);
    } catch (error) {
      console.log("there is error", error);
    }
  };

  const handlenameChange = (id, newName) => {
    setContactData((previousData) =>
      previousData.map((apnaData) =>
        apnaData._id === id ? { ...apnaData, name: newName } : apnaData
      )
    );
  };

  const handleEmailChange = (id, newEmail) => {
    setContactData((previousData) =>
      previousData.map((apnaData) =>
        apnaData._id === id ? { ...apnaData, email: newEmail } : apnaData
      )
    );
  };

  
  const handleImageChange = (id, newImage) => {
    setContactData((previousData) =>
      previousData.map((apnaData) =>
        apnaData._id === id ? { ...apnaData, image: newImage } : apnaData
      )
    );
  };

  const editContact = async (id, newName, newEmail,) => {
    try {
      const response = await axios.put(
        `${baseURL}/api/contact/editContact/${id}`,

        {
          name: newName,
          email: newEmail,
        }
      );
      alert("EDITED");
      console.log("The response is", response.data);

      //  setContactData(response.data);
    } catch (error) {
      console.log("there is error", error);
    }
  };

  // const editContact = async (id, newName, newEmail, newImage) => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("name", newName);
  //     formData.append("email", newEmail);
  //     if (newImage instanceof File) {
  //       formData.append("image", newImage); 
  //     }

  //     const response = await axios.put(
  //       `http://localhost:5000/api/contact/editContact/${id}`,
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );
  //     alert("Contact edited successfully");
  //     getContact();
  //   } catch (error) {
  //     console.log("There is an error", error);
  //   }
  // };


  const deleteContact = async (id) => {
    try {
      const response = await axios.delete(
        `${baseURL}/api/contact/deleteContact/${id}`
      );
      console.log("Item is deleted", response.data);
      alert("Details Deleted")
    } catch (error) {
      console.log("There is no", error);
    }
  };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <div className="EditContact">
      <table className="table">
        <tr>
          <th>Name</th> <th>Email</th>
          <th>Phone</th>
          <th>Image</th>
          <th>Edit </th>
          <th>Delete</th>
        </tr>
        {contactData.map((item) => (
          <tr key={item._id}>
            {/* <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td> */}
            <td>
              {/* {item.name} */}

              <InputBox
                type="text"
                value={item.name}
                onChange={(e) => handlenameChange(item._id, e.target.value)}
              />

              {/* <input
                style={{
                  borderRadius: "5px",
                  borderColor: "#d3d3d3",
                  border: "2px solid #d3d3d3",
                  boxSizing: "border-box",
                  width: "100%",
                }}
                type="text"
                value={item.name}
                onChange={(e) => handlenameChange(item._id, e.target.value)}
              /> */}
            </td>

            <td>
              <InputBox
                type="text"
                value={item.email}
                onChange={(e) => handleEmailChange(item._id, e.target.value)}
              />

              {/* <input
                type="text"
                value={item.email}
                onChange={(e) => handleEmailChange(item._id, e.target.value)}
              /> */}
            </td>

            <td>
              <InputBox
                type="text"
                value={item.phone}
                // onChange={(e) => handlenameChange(item._id, e.target.value)}
              />
            </td>

            <td style={{ display: "flex", justifyContent: "center" }}>

            {/* <input
                type="file"
                placeholder="Image"
                onChange={(e) => handleImageChange(item._id, e.target.files[0])}
              /> */}
              <img
                style={{ height: "45px", width: "45px", borderRadius: "100px" }}
                src={`${baseURL}/${item.image}`}
              />
              {/* <InputBox
                type="text"
                value={item.phone}
                onChange={(e) => handlenameChange(item._id, e.target.value)}
              /> */}
            </td>

            <td>
              <button
                style={{
                  background:
                    "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "18px",
                  width: "100%",
                  fontFamily: "monospace",
                }}
                onClick={() => editContact(item._id, item.name, item.email)}
              >
                Edit
              </button>
            </td>
            <td style={{ display: "flex", justifyContent: "center" }}>
              {/* <button style={{
                color:'red',
                border:'none',
                borderRadius:'5px',
                fontSize:"18px",
                width:'100%',
                backgroundColor:'white',
                fontFamily:'monospace'}} onClick={() => deleteContact(item._id)}>Delete</button> */}
              <img
                onClick={() => deleteContact(item._id)}
                style={{ height: "35px", width: "35px", textAlign: "center",cursor:'pointer' }}
                src={deleteicon}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
