import { useEffect, useState } from "react";

export const PetList = ({ employeeId, showPets}) => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    fetch(`https://one0-2-vet-api.onrender.com/api/pets?employeeId=${employeeId}`)
      .then((res) => res.json())
      .then((json) => setPets(json));
  }, [showPets]);

  return (
    <aside className="pets-list">
      <p>
      {pets.map((pet, index) => {
        console.log(pet)
          return (
            <>
          {index < pets.length-1?(`${pet.name}, `):(`${pet.name}`)}
            </>
          );
        })}
      
      </p>
    </aside>
  );
};

export default PetList;
