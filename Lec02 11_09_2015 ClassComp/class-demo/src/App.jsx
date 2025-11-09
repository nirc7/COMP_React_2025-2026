
import './App.css'
import CCCar from './ClassComsp/CCCar';
import CCParent from './ClassComsp/CCParent';
import EHeader from './Elements/EHeader';
import FCPerson from './FuncComps/FCPerson';

function App() {

  return (
    <div>
      {EHeader}
      <CCParent/>
      <CCCar model={"BMW"} speed ={200}/>
      <CCCar model={"Porsche"} speed ={300}/>

      <FCPerson id={1} name={"avi"} /> 
      <FCPerson id={2} name={"benny"} /> 
    </div>
  )
}

export default App
