import { useState } from 'react'

const Button = ({text, onClick}) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

const Statistics = ({good, neutral, bad}) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

const App = () => {
  const [ stats, setStats ] = useState({good: 0, neutral: 0, bad: 0})

  const handleGood = () => {
    setStats({
      ...stats,
      good: stats.good + 1
    })
  }

  const handleNeutral = () => {
    setStats({
      ...stats,
      neutral: stats.neutral + 1
    })
  }

  const handleBad = () => {
    setStats({
      ...stats,
      bad: stats.bad + 1
    })
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button text='plus' onClick={handleGood}/>
      <Button text='neutral' onClick={handleNeutral}/>
      <Button text='bad' onClick={handleBad}/>
      <Statistics stats={stats}/>
    </>
  )
}

export default App