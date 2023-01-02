import { useCallback, useEffect, useState } from 'react'
import './App.css'
import API_ROUTES from '../../utilis/constants'
import Trick from '../Trick/Trick'
import Form from '../Form/Form'

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

  const postData = async (body) => {
console.log(body)
    const response = await fetch(API_ROUTES.POST_TRICK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const data = await response.json()

    const addedTrick = () => {
      return (
        <Trick
          key={`trick ${data.id}`}
          name={data.name}
          stance={data.stance}
          obstacle={data.obstacle}
          url={data.tutorial}
        />
      )
    }

    setTricks([...tricks, addedTrick])
    console.log(tricks)
  }

  useEffect(() => {
    fetchData().catch(console.error)
  }, [])

  return (
    <div className='App'>
      <h1>Sick Trick Wish List</h1>
      <Form postData={postData} />
      <div className='tricks'>{tricks}</div>
    </div>
  )
}
