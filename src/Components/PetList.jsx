export const PetList = ({
  getEmployeePets,
  employeeId
}) => {

  let theirPets = getEmployeePets(employeeId)

  theirPets != [] ? theirPets = theirPets.map((pet) => pet.name).join(", ") : null

  console.log(theirPets)
  return (
    <aside className="pets-list">
      {theirPets != "" ? (<span>{theirPets}</span>) : <p>No pets listed for this employee.</p>}
      
    </aside>
  );
};

export default PetList;
