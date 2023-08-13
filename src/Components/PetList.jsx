import {useState, useEffect} from 'react';
const URL = 'https://one0-2-vet-api.onrender.com/api/pets'

export const PetList = ({ employeeId }) => {
  const [pets, setPets] = useState();
  const [showDetail, setShowDetail] = useState(false);

  useEffect(()=>fetchingPets(),[]);
  
  function fetchingPets(){
    fetch(URL + `?employeeId=${employeeId}`).then((data)=>data.json()).then((json)=>setPets(json));
    //console.log(employeeId)
  }

  function updateDetail(){
    setShowDetail(!showDetail);
    console.log(Array.isArray(pets))
  }

  return (
    <>
      <button onClick={()=>updateDetail()}>Show Pets</button>
      <aside className="pets-list">
        {
          showDetail ? (
            <p>{pets.length >0 ?pets.map((elem,index)=>{ return ((index != pets.length-1) ? (<span>{elem.name}, </span>) : (<span>{elem.name}</span>)
            )}):(<span>No pets listed for this employee</span>)}
            </p>
          ) : null
        }
      </aside>
    </>
  );
};

export default PetList;
