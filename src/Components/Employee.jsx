import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({ pets, info }) => {
  return (
    <article className="employee">
      <h3>{`${info.prefix + " " ?? ""} ${info.firstName} ${info.lastName}${
        " " + info.postfix ?? ""
      }`}</h3>
      <h4>{info.title}</h4>
      <button>Show Pets</button>
      <PetList pets={pets} />
    </article>
  );
};

export default Employee;
