

export default function FCPerson(props) {

  let counter =0;
  //props.name = "asdf"; //ERROR!
  let name = props.name;
  name += ":)";


  function chgAdrs(e) {
    console.log(e.target.value);
  }

  function btnAdd(){
    console.log(counter);
    counter++;
    console.log(counter); 
  }

  return (
    <div>
      <p>person</p>
      id = {props.id} <br />
      name = {name} <br />
      address: <input type="text" onChange={chgAdrs} /> <br />
      <button onClick={btnAdd} >Add</button> <br />
      counter={counter}  
    </div>
  );
}