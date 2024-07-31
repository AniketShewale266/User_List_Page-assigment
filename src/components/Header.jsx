import React, { useState } from "react";
import Select from "./Select";

function Header({ setQuery }) {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  // functions use to set country value
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setQuery(e.target.value.toLowerCase());
  };

  // // functions use to set gender value
  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <>
      <header>
        <div className="title">
          <h2>Employees</h2>
        </div>

        <div className="right-filter">
          {/* <FilterBox onChange={handleGenderChange} /> */}

          <Select
            id="country"
            name="country"
            value={selectedCountry}
            options={[
              "United States",
              "India",
              "Brajil",
              "Russia",
              "Itali",
            ]}
            defaultOption="Country"
            onChange={handleCountryChange}
          />


          <Select id="gender"
            name="gender"
            value={selectedGender}
            options={["Male", "Female"]}
            defaultOption="Gender"
            onChange={handleGenderChange}/>
        </div>


      </header>
    </>
  );
}

export default Header;
