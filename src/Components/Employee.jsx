import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export const Employee = ({ pets, info }) => {
  const [petsVisible, setPetsVisible] = useState(false);
  return (
    <article className="employee">
      <h3>{`${info.prefix + " " ?? ""} ${info.firstName} ${info.lastName}${
        " " + info.postfix ?? ""
      }`}</h3>
      <h4>{info.title}</h4>
      <button
        onClick={() => {
          setPetsVisible(!petsVisible);
        }}
      >
        Show Pets
      </button>
      {petsVisible ? <PetList pets={pets} /> : <></>}
    </article>
  );
};

export default Employee;
