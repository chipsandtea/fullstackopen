import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>;
 

const Button = ({text, onClick}) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter -1);
  }

  const reset = () => {
    setCounter(0);
  }

  return (
    <>
      <Display counter={counter}/>
      <Button text='plus' onClick={increment}/>
      <Button text='minus' onClick={decrement}/>
      <Button text='reset' onClick={reset}/>
    </>
  )
}

export default App