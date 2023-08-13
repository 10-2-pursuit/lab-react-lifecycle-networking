import React, {useState, useEffect} from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {

  const vetApi = "https://one0-2-vet-api.onrender.com/api/employees";

  const [vets, setVets] = useState([]);

  function getAllVets() {
    fetch(vetApi)
      .then((data) => data.json())
      .then((json) => {
        setVets(json);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getAllVets();
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {vets.map((vet) => (
          <Employee key={vet.id} employee={vet} />
        ))}
      </section>
    </main>
  );
};

export default EmployeeList;
