import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import { useEffect, useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  const [pets, setPets] = useState([]);
  useEffect(() => {
    fetch("https://one0-2-vet-api.onrender.com/api/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
      });
    fetch("https://one0-2-vet-api.onrender.com/api/pets")
      .then((response) => response.json())
      .then((data) => {
        setPets(data);
      });
  }, []);
  console.log(employees);
  console.log(pets);
  return (
    <>
      <NavBar />
      <EmployeeList employees={employees} pets={pets} />
    </>
  );
}

export default App;
