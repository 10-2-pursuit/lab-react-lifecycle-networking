import "./EmployeeList.css";
import React, { useState, useEffect } from 'react';
import Employee from './Employee';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await fetch('https://one0-2-vet-api.onrender.com/api/employees');
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    }

    fetchEmployees();
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
      {employees.map(employee => (
        <Employee key={employee.id} employee={employee} />
      ))}
      </section>
    </main>
  );
}

export default EmployeeList;
