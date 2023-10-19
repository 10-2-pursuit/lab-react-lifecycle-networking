import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({ employees, pets }) => {
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((e) => {
          let petlist = pets.filter((pet) => pet.employeeId === e.id);
          console.log(e, petlist);
          return <Employee pets={petlist} info={e} />;
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
