import React, { useEffect, useState } from "react";
import UserData from "./UserData";

function UserList({ query }) {
  const [userData, setUserData] = useState([]);
  const [sortColumn, setSortColumn] = useState('id'); 
  const [sortOrder, setSortOrder] = useState('asc'); 

  // function to fetch the user data
  const getUserData = async () => {
    const res = await fetch("https://dummyjson.com/users?limit=10");
    const data = await res.json();
    setUserData(data.users);
  };

  useEffect(() => {
    getUserData();
  }, []);

//   console.log(query);
  // console.log(userData);
  const filteredData = userData.filter((user) => {
    return (
      user.gender
        .charAt(0)
        .toUpperCase()
        .includes(query.charAt(0).toUpperCase()) ||
      user.address.country.toLowerCase().includes(query)
    );
  });

//   Sort the data based on Column and Order
     filteredData.sort((a, b) => {
      if (sortOrder === 'asc') {
          return a[sortColumn] > b[sortColumn] ? 1 : -1;
      } else {
          return a[sortColumn] < b[sortColumn] ? 1 : -1;
      }
  });

  // Handlers for sorting 
  const handleSort = (column, order) => {
      setSortColumn(column);
      setSortOrder(order);
  };

  return (
    <>
      <div className="user-list">
        <table className="user-table">
          <thead>
            <tr>
              <th className="asce-desc-column">
                <div>
                  <span>ID</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 384 512"
                    className="arrow up-arrow"
                    onClick={() => handleSort('id', 'asc')}
                  >
                    <title>Ascending</title>
                    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 384 512"
                    className="arrow down-arrow"
                    onClick={() => handleSort('id', 'desc')}
                  >
                    <title>Descending</title>
                    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                </div>
              </th>
              <th>Image</th>
              <th className="asce-desc-column">
                <div>
                  <span>Full Name</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 384 512"
                    className="arrow up-arrow"
                    onClick={() => handleSort('firstName', 'asc')}
                  >
                    <title>Ascending</title>
                    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 384 512"
                    className="arrow down-arrow"
                    onClick={() => handleSort('firstName', 'desc')}
                  >
                    <title>Descending</title>
                    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                </div>
              </th>

              <th className="asce-desc-column">
                <div>
                  <span>Demography</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 384 512"
                    className="arrow up-arrow"
                    onClick={() => handleSort('age', 'asc')}
                  >
                    <title>Ascending</title>
                    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 384 512"
                    className="arrow down-arrow"
                    onClick={() => handleSort('age', 'desc')}
                  >
                    <title>Descending</title>
                    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                </div>
              </th>

              <th>Designation</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user) => (
              <UserData
                key={user.id}
                id={user.id}
                image={user.image}
                firstName={user.firstName}
                maidenName={user.maidenName}
                lastName={user.lastName}
                gender={user.gender}
                age={user.age}
                company={user.company.title}
                address={user.address}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserList;
