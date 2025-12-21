import { createContext, useState } from "react";

import {v4 as  uuidv4 } from 'uuid';

export const HobbyContext = createContext();

export default function HobbyContextProvider(props) {
  const [hobbies, setHobbies] = useState([
    { id: 1, name: 'play', frequency: 3 }
  ]);

  const addHobby = (name, freq) => {
    let newHobbies = [...hobbies, { id: uuidv4(), name, frequency: freq }];
    setHobbies(newHobbies);
  }

  const removeHobby = (id) => {
    let newHobbies = hobbies.filter(hob => hob.id !== id);
    setHobbies(newHobbies);
  }

  return (
    <div>
      <HobbyContext.Provider value={{ hobbies, addHobby, removeHobby }}>
        {props.children}
      </HobbyContext.Provider>
    </div>
  )
}
