import PetList from "./PetList";
import "./Employee.css";
import { useState, useEffect } from 'react';

const URL = 'https://one0-2-vet-api.onrender.com'

export const Employee = () => {
  const [employees, setEmployees] = useState([]);
  
  useEffect(()=> fetchSomething(),[]);

  function fetchSomething(){
    fetch(URL+"/api/employees")
      .then((data)=> data.json())
        .then((json)=>{
            setEmployees(json);
          }).catch((err)=>{console.log(err)});
  }

  return (
    <>
      {employees.map((elem)=>{
        return(
          <article className="employee">
            <h3>{elem.postfix ? (elem.prefix+ " " + elem.firstName+ " "+ elem.lastName + ", " + elem.postfix):(elem.prefix+ " " + elem.firstName+ " "+ elem.lastName)}</h3>
            <h4>{elem.title}</h4>
            <PetList employeeId={ elem.id } />
          </article>
        )
      })}
    </>
  );
};

export default Employee;
