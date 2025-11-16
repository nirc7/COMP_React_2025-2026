import './App.css'
import CCCar from './ClassComps/CCCar'
import EHeader from './Elemetnts/EHeader'
import FCStudent from './FuncComps/FCStudent'

function App() {

  return (
    <div>
      {EHeader}
      <CCCar model={"BMW"} speed={200} />
      <CCCar model={"KIA"} speed={300} />
      
      <FCStudent name="avi" grade={100} />
      <FCStudent name="benny" grade={90} />
    </div>
  )
}

export default App
