import { useContext } from "react";
import { HobbyContext } from "./ContextDir/HobbyContextProvider";


export default function HobbiesList(props) {
  const { hobbies, removeHobby } = useContext(HobbyContext);

  let hobbiesStr = hobbies.map(hob =>
    <li key={hob.id}>id= {hob.id} name={hob.name} freq={hob.frequency}
      <span onClick={() => removeHobby(hob.id)} style={{cursor:'pointer'}}>X</span>
    </li>
  );

  return (
    <div>
      <ul>
        {hobbiesStr}
      </ul>
    </div>
  )
}
