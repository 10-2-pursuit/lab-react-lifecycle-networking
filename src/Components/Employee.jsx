import React, { useEffect, useState } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({ employee }) => {
  const [showPets, setShowPet] = useState(false);

  function toggleShowPets() {
    setShowPet(!showPets);
  }

  return (
    <article className="employee">
      <h3>
        {" "}
        {employee.prefix ? employee.prefix : ""}
        {employee.firstName} {employee.lastName}{" "}
        {employee.postfix ? employee.postfix : ""}
      </h3>
      <h4>{employee.title ? employee.title : ""}</h4>
      <button onClick={toggleShowPets}>Show Pets</button>
      {showPets ? <PetList employeeid={employee.id} /> : '' }
    </article>
  );
};

export default Employee;
