import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);// number is still 1 after this
        setNumber(number + 1);// number is still 1 after this
        setNumber(number + 1);// number is still 1 after this
      }}>+3</button> 
    </>
  )// takewaya : don't update the state for a single entity more than once in a particular event handler
}
