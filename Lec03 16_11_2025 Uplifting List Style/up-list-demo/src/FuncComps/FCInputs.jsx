import { flushSync } from "react-dom"


export default function FCInputs(props) {
  let num1 = null;
  let num2 = null;

  const chgNum1 = (e) => {
    num1 = Number(e.target.value);
    console.log(num1);
  }

  const chgNum2 = (e) => {
    num2 = Number(e.target.value);
  }

  const btnAddNum = () => {
    props.sendRes(num1 + num2);
  }

  return (
    <div>
      Inputs <br />
      NUM1: <input type="text" onChange={chgNum1} /> <br />
      NUM2: <input type="text" onChange={chgNum2} /> <br /><br /> <br />
      <button onClick={btnAddNum}>+</button> <br />
    </div>
  )
}
