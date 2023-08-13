import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";


export const Employee = ({
    employee,
    getEmployeePets
  }) => {

 const [showPetList, setShowPetList] = useState(false)


  const fullName = [employee.prefix, employee.firstName, employee.lastName].join(' ')
  return (
    <article className="employee" key={employee.id}>
      <h3>{`${fullName}${employee.postfix != "" ? `, ${employee.postfix}` : ""}` || `$%Staff Member Name`}</h3>
      <h4>{employee.title || `Staff Member Title`}</h4>
      <button onClick={() => setShowPetList(!showPetList)}>{!showPetList ? `Show Pets` : `Hide Pets`}</button>

      {showPetList ? <PetList 
        getEmployeePets={getEmployeePets}
        employeeId={employee.id}
        /> : null }
      
    </article>
  );
};

export default Employee;
