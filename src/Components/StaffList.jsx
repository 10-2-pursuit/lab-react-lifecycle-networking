import React, { useState, useEffect } from 'react';
import '../staffList.css';

function StaffList() {
  const [staffMembers, setStaffMembers] = useState([]);
  const [showPetsFor, setShowPetsFor] = useState(null);

  const fetchStaffMembers = async () => {
    try {
      const response = await fetch('https://one0-2-vet-api.onrender.com/api/employees');
      const data = await response.json();
      setStaffMembers(data);
    } catch (error) {
      console.error('Error fetching staff members:', error);
    }
  };

  const fetchPetNames = async (employeeId) => {
    try {
      const response = await fetch(`https://one0-2-vet-api.onrender.com/api/pets?employeeId=${employeeId}`);
      const data = await response.json();
      const petNames = data.map((pet) => pet.name).join(', ');
      return petNames;
    } catch (error) {
      console.error('Error fetching pet names:', error);
      return '';
    }
  };

  useEffect(() => {
    fetchStaffMembers();
  }, []);

  const handleShowPetsClick = async (employeeId) => {
    const petNames = await fetchPetNames(employeeId);
    setShowPetsFor({ employeeId, petNames });
  };

  return (
    <div>
      <h1>Staff Members</h1>
      <ul className="staff-list">
        {staffMembers.map((staff) => (
          <li key={staff.id} className="staff-card">
            <div className="staff-info">
              <div>
                <h3>

                {staff.prefix} {staff.firstName} {staff.lastName}
                {staff.postfix && `, ${staff.postfix}`}
                </h3>
              </div>
              <div> <p>{staff.title}</p></div>
            </div>
            <button className='btn' onClick={() => handleShowPetsClick(staff.id)}>Show Pets</button>
            {showPetsFor && showPetsFor.employeeId === staff.id && (
              <div className="pet-info">Pets: {showPetsFor.petNames}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StaffList;
