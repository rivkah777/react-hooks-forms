import React, { useState } from "react";

function parentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");


function handleFirstNameChange(event){
  setFirstName(event.target.value);
}


function handleLastNameChange(event){
  setLastName(event.target.value);
}


 return (
    <form>
      <input type="text" onChange={handleFirstNameChange}value={firstName} />
      <input type="text" onchange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
} 

export default parentComponent;

 