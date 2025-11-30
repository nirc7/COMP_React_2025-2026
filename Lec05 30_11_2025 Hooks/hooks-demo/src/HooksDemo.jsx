import { useEffect, useState } from "react";

export default function HooksDemo(props) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  const [names, setNames] = useState({ name1: 'avi', name2: 'ben' });


  const btnCNAC = () => {
    setCount2(8);
    setNames({ name1: 'eli', name2: 'kblekiq' });
  }

  console.log('here...');


  useEffect(() => {
    console.log('general use effect ');
  })

  useEffect(() => {
    console.log('did mount!');

    return () => {
      console.log('will unmount!');
    }
  }, [])

  useEffect(() => {
    console.log('count changeed!');
  }, [count]);


  useEffect(() => {
    console.log('count and count2 changeed!');
  }, [count, count2]);

  console.log('here2...');
  return (
    <div style={{ border: 'solid green 2px' }}>
      <h3>Hooks Demo</h3>
      count={count} <br />
      <button onClick={() => setCount(7)} >count=7</button> <br />
      <button onClick={() => setCount(prevC => prevC + 1)} >count++</button> <br />
      count2={count2} <br />
      <button onClick={() => setCount2(7)} >count2=7</button> <br />

      name1 = {names.name1} <br />
      name2= {names.name2} <br />
      <button onClick={() => setNames({ name1: 'dora', name2: names.name2 })}>change name1</button>
      <button onClick={btnCNAC}>change count and name</button>
    </div>
  )
}
