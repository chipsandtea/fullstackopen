import { useState } from 'react'

const GOOD_SCORE = 1
const NEUTRAL_SCORE = 0
const BAD_SCORE = -1

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const StatisticsLine = ({ statName, statValue }) => {
  return (
    <tr>
      <td>{statName}</td>
      <td>{statValue}</td>
    </tr>
  )
}

const Statistics = ({ stats }) => {
  const { good, neutral, bad } = stats
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given.</p>
      </div>
    )
  }
  const total = good + neutral + bad

  const goodScore = GOOD_SCORE * good
  // Always 0 for now, but weight might change in the future.
  const neutralScore = NEUTRAL_SCORE * neutral
  const badScore = BAD_SCORE * bad

  const average = (goodScore + badScore + neutralScore) / total
  const positive = goodScore / total
  const positiveStr = `${positive * 100}%`
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine statName="good" statValue={good} />
          <StatisticsLine statName="neutral" statValue={neutral} />
          <StatisticsLine statName="bad" statValue={bad} />
          <StatisticsLine statName="total" statValue={total} />
          <StatisticsLine statName="average" statValue={average} />
          <StatisticsLine statName="positive" statValue={positiveStr} />
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  const [stats, setStats] = useState({ good: 0, neutral: 0, bad: 0 })

  const handleGood = () => {
    setStats({
      ...stats,
      good: stats.good + 1,
    })
  }

  const handleNeutral = () => {
    setStats({
      ...stats,
      neutral: stats.neutral + 1,
    })
  }

  const handleBad = () => {
    setStats({
      ...stats,
      bad: stats.bad + 1,
    })
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button text="plus" onClick={handleGood} />
      <Button text="neutral" onClick={handleNeutral} />
      <Button text="bad" onClick={handleBad} />
      <Statistics stats={stats} />
    </>
  )
}

export default App
