
import './App.css'
import CCCar from './ClassComps/CCCar';
import EHeader from './Elements/EHeader';
import FCStudent from './FuncComps/FCStudent';



function App() {
  return (
    <div>
      {EHeader}

      <h1>Vite + React</h1>
      <div className="card">
        <CCCar model={"BMW"} speed={200}/> <br />
        <CCCar model={"Porsche"} speed={300}/> <br />
        <FCStudent name="avi" grade={100}/>
        <FCStudent name="charlie" grade={50}/>
      </div>
    </div>
  )
}

export default App
