import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import { useEffect, useState } from "react";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(
    () =>
      fetch("https://one0-2-vet-api.onrender.com/api/employees")
        .then((res) => res.json())
        .then((json) => setEmployees(json)),
    []
  );

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee) => {
          return (
            <Employee
              firstName={employee.firstName}
              lastName={employee.lastName}
              prefix={employee.prefix}
              postfix={employee.postfix}
              title={employee.title}
              id= {employee.id}
            />
          );
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
