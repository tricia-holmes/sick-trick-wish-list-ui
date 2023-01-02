import { useEffect, useState } from 'react'
import './Form.css'

export default function Form({postData }) {
  const [stance, setStance] = useState('')
  const [name, setName] = useState('')
  const [obstacle, setObstacle] = useState('')
  const [tutorial, setTutorial] = useState('')

  useEffect(() => {
    console.log(stance)
    console.log(obstacle)
  }, [stance, obstacle])

  const handleSubmit = (e) => {
    const body = { stance, name, obstacle, tutorial }
    postData(body)
  }

  return (
    <form onSubmit={handleSubmit}>
      <select
        name='stanceList'
        id='stanceList'
        value={stance}
        onChange={(e) => {
          setStance(e.target.value)
        }}
        required
      >
        <option value=''>Choose your stance</option>
        <option value='Regular'>Regular</option>
        <option value='Goofy'>Goofy</option>
      </select>
      <input
        type='text'
        name='name'
        onChange={(e) => {
          setName(e.target.value)
        }}
        placeholder='Name of Trick'
        value={name}
        autoComplete='off'
        required
      />
      <select
        name='obstacleList'
        id='obstacleList'
        value={obstacle}
        onChange={(e) => {
          setObstacle(e.target.value)
        }}
        required
      >
        <option value=''>Choose your obstacle</option>
        <option value='Flatground'>Flatground</option>
        <option value='Ledge'>Ledge</option>
        <option value='Rail'>Rail</option>
        <option value='Stairs'>Stairs</option>
        <option value='Pool'>Pool</option>
      </select>
      <input
        type='url'
        name='url'
        onChange={(e) => {
          setTutorial(e.target.value)
        }}
        placeholder='Link of Tutorial'
        value={tutorial}
        autoComplete='off'
        required
      />
      <button type='submit'>Send It!</button>
    </form>
  )
}
