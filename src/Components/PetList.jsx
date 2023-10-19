export const PetList = ({ pets }) => {
  return pets.length <= 0 ? (
    <p>No pets listed for this employee.</p>
  ) : (
    <>
      {pets.map((p) => (
        <p>{p.name}</p>
      ))}
    </>
  );
  return <aside className="pets-list"></aside>;
};

export default PetList;
