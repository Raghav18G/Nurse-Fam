import React, { useState } from "react";
import "./style.css";
import { Paper } from "@mui/material";

const MultiInput = ({ itinerary, setItinerary, label }) => {
  const [value, setvalue] = useState("");
  const [error, seterror] = useState(null);
  const handleKeyDown = (evt) => {
    if (["Enter", "Tab", ","].includes(evt.key)) {
      evt.preventDefault();
      var newValue = value.trim();
      if (newValue && isValid(newValue)) {
        setItinerary([...itinerary, newValue]);
        setvalue("");
      }
    }
  };
  const handleChange = (evt) => {
    setvalue(evt.target.value);
    seterror(null);
  };

  const handleDelete = (item) => {
    setItinerary(itinerary.filter((i) => i !== item));
  };
  const handlePaste = (evt) => {
    evt.preventDefault();
    var paste = evt.clipboardData.getData("text");
    var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);
    if (emails) {
      var toBeAdded = emails.filter((email) => !isInitinerary(email));
      setItinerary([...this.itinerary, ...toBeAdded]);
    }
  };
  const isValid = (email) => {
    let error = null;

    return true;
  };
  const isInitinerary = (email) => {
    return itinerary.includes(email);
  };

  return (
    <>
      {
        <>
          <label>Care Specialization*</label>
          <input
            className={"input " + (error && " has-error")}
            value={value}
            placeholder="Search"
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            onPaste={handlePaste}
          />

          <div className="outer-div">
            {itinerary.map((item) => (
              <Paper elevation={3} className="tag-item">
                <div key={item}>
                  {item}
                  <button
                    type="button"
                    className="button-chip"
                    onClick={() => handleDelete(item)}
                  >
                    &times;
                  </button>
                </div>
              </Paper>
            ))}
          </div>
        </>
      }

      {/* <hr />
      {error && <p className="error">{error}</p>} */}
    </>
  );
};
export default MultiInput;
