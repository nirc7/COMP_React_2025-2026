import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Inputs(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const btnAddPerson = () => {
    props.addPerson({ id: uuidv4(), name, age });
    setName('');
    setAge('');
  }

  return (
    <div>
      Name: <input type="text"
        placeholder='enter the name...'
        value={name}
        onChange={(e) => setName(e.target.value)} /> <br />
      Age: <input type="text" 
        placeholder='enter the age...'
        value={age}
        onChange={(e) => setAge(e.target.value)} /> <br />
      <button onClick={btnAddPerson} >Add Person</button>
    </div>
  )
}
