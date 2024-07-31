import React from "react";

function UserData({id,image,firstName,maidenName, lastName, gender, age, company, address}) {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>
          <img src={image} alt={firstName} className="user-img" />
        </td>
        <td>{firstName + " " + maidenName + " " + lastName}</td>
        <td>{gender.charAt(0).toUpperCase() + "/" + age}</td>
        <td>{company}</td>
        <td>{address.state + ", " + address.country}</td>
      </tr>
    </>
  );
}

export default UserData;
