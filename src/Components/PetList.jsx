import React from 'react';

function PetList({ pets }) {
  const petNames = pets.map(pet => pet.name);

  return (
    <aside className="pets-list">
      {petNames.length > 0 ? (
        <div>
          <p>{petNames.join(', ')}</p>
        </div>
      ) : (
        <div>
          <p>No pets listed for this employee.</p>
        </div>
      )}
    </aside>
  );
}

export default PetList;
