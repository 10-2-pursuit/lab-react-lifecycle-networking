import React, { useState } from 'react';
import PetList from './PetList';

function Employee({ employee }) {
  const [showPets, setShowPets] = useState(false);
  const [employeePets, setEmployeePets] = useState([]);

  const handleShowPets = async () => {
    if (!employeePets.length) {
      try {
        const response = await fetch(`https://one0-2-vet-api.onrender.com/api/pets?employeeId=${employee.id}`);
        const data = await response.json();
        setEmployeePets(data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    }
    setShowPets(!showPets);
  };

  return (
    <div>
   <atricle className="employee">
      <h3>
        {employee.prefix && `${employee.prefix} `}
        {employee.firstName} {employee.lastName}
        {employee.postfix && `, ${employee.postfix}`}
      </h3>
      <h4>{employee.title && `${employee.title}`}</h4>
      <button onClick={handleShowPets}>Show Pets</button>
      {showPets && <PetList pets={employeePets} />}
   </atricle>
    </div>
  );
}

export default Employee;
