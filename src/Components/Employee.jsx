import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export const Employee = ({firstName, lastName, prefix, postfix, title, id}) => {
  const [showPets, setShowPets] = useState(false);


const handleShowPet = (e) => {
  e.preventDefault();
  setShowPets(!showPets);
  
}

  return (
    <article className="employee">
      <h3>{`${prefix} ${firstName} ${lastName} ${postfix}`}</h3>
      <h4>{`${title}`}</h4>
      <button onClick={handleShowPet} >Show Pets</button>
      {showPets && <PetList employeeId={id}  showPets={showPets} />}
    </article>
  );
};

export default Employee;
