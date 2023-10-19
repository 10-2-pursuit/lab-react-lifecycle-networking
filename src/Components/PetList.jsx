export const PetList = ({ pets }) => {
  let p = pets.map((pet) => pet.name);
  return pets.length <= 0 ? (
    <p>No pets listed for this employee.</p>
  ) : (
    <p>{p.join(", ")}</p>
  );
  return <aside className="pets-list"></aside>;
};

export default PetList;
