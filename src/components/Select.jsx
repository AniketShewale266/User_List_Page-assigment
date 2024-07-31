import React from "react";

function Select({
  id,
  name,
  value,
  options,
  defaultOption,
  onChange,
}) {
  return (
    <>
      <div className="select-container">
        <select id={id} name={name} value={value} className="filter-box" onChange = {onChange}>
          {defaultOption && (
            <option hidden="" value="">
              {defaultOption}
            </option>
          )}

          {options.map((option, i) => {
            return (
              <option key={i} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default Select;
