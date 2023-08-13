import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {

const [employeeData, setEmployeeData] = useState([])
const [petData, setPetData] = useState([])

function setEmployeeList() {
  fetch("https://one0-2-vet-api.onrender.com/api/employees")
  .then((response) => response.json())
  .then((json) =>  setEmployeeData(json))
  .catch((err) => {console.log(err)})
}

function setPetDataList() {
  fetch("https://one0-2-vet-api.onrender.com/api/pets")
  .then((response) => response.json())
  // .then((json) => console.log(json))
  .then((json) =>  setPetData(json))
  // .catch((err) => console.log(err))
}

function getEmployeePets(id) {
  console.log(petData)

  return petData.filter((pet) => {
    return pet.employeeId == id
  })
} 

useEffect(() => {
   setEmployeeList()
}, [])

useEffect(() => {
  setPetDataList() 
}, [])


  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employeeData.map((employee) => {
         return (
             <Employee
                employee={employee}
                getEmployeePets={getEmployeePets}
             />
             )
          })
        }
        {/* <Employee /> */}
      </section>
    </main>
  );
};

export default EmployeeList;
