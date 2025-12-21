
import AddHobby from './AddHobby'
import './App.css'
import HobbyContextProvider from './ContextDir/HobbyContextProvider'
import HobbiesList from './HobbiesList'

function App() {

  return (
    <HobbyContextProvider>
      <AddHobby />
      <hr />
      <HobbiesList />
    </HobbyContextProvider>
  )
}

export default App
