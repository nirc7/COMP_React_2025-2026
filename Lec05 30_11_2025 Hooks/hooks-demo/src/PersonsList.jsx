

export default function PersonsList(props) {

  let personsStr = props.persons.map(per =>
    <li key={per.id}>id = {per.id} name = {per.name} age= {per.age}
      <span 
      style={{paddingLeft:5, color:'red', cursor:'crosshair'}}
      onClick={() => props.removePerson(per.id)}>X</span>
    </li>
  );

  return (
    <div>
      <ul>
        {personsStr}
      </ul>
    </div>
  )
}
