import { useContext, useState } from "react";
import { HobbyContext } from "./ContextDir/HobbyContextProvider";

export default function AddHobby(props) {
  const { addHobby } = useContext(HobbyContext);

  const [name, setName] = useState();
  const [freq, setFreq] = useState(0);


  return (
    <div>
      name: <input type="text" onChange={(e) => setName(e.target.value)} /> <br />
      freq: <input type="text" onChange={(e) => setFreq(e.target.value)} /> <br />
      <button onClick={() => addHobby(name, freq)}  >add hobby</button>
    </div>
  )
}
