import { useState } from "react";
import Inputs from "./Inputs";
import PersonsList from "./personsList";


export default function NamesProj() {
  const [persons, setPersons] = useState([
    { id: 1, name: 'avi', age: 30 },
    { id: 2, name: 'ben', age: 40 }
  ]);

  const addPerson = (per) => {
    let newPersons = [...persons, per];
    console.log(newPersons);
    setPersons(newPersons);
  }

  const removePerson = (id) => {
    let newP = persons.filter(per => per.id !== id);
    console.log(newP);
    setPersons(newP);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-evenly',
      border:'2px dashed purple', margin:10
     }}>
      <div style={{ border: 'solid black 1px', padding: 10, margin: 10 }}>
        <Inputs addPerson={addPerson} />
      </div>
      <div style={{ border: 'solid black 1px', padding: 10, margin: 10 }}>
        <PersonsList persons={persons} removePerson={removePerson} />
      </div>
    </div>
  )
}
