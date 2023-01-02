import { useCallback, useEffect, useState } from 'react'
import './App.css'
import API_ROUTES from '../../utilis/constants'
import Trick from '../Trick/Trick'

export default function App() {
  const [tricks, setTricks] = useState([])

  const fetchData = useCallback(async () => {
    const response = await fetch(API_ROUTES.GET_TRICKS, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()

    const newTricks = data.map((trick) => {
      return (
        <Trick
          key={`trick ${trick.id}`}
          name={trick.name}
          stance={trick.stance}
          obstacle={trick.obstacle}
          url={trick.tutorial}
        />
      )
    })

    setTricks(newTricks)
    console.log(data)
  }, [])

  useEffect(() => {
    fetchData().catch(console.error)
  }, [])

  return (
    <div className='App'>
      <h1>Sick Trick Wish List</h1>
      <div className='tricks'>{tricks}</div>
    </div>
  )
}
