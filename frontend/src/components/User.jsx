import React, { useState } from 'react'

function User(props) {
  const [post, setPost] = useState('')

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setPost(post =>({...post, [name]: value}))
  }
  function handleSubmit(e) {
    e.preventDefault()

    let userData ={
      name: post.name,
      weather: [
        props.location,
        props.condtion,
        props.feelsLike,
        props.currentTemp
      ]
    }
   fetch('http://localhost:5001/user', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(res => res.json())

  
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>
           <input type="string" name="name" onChange={handleChange}/>
        </label>
       
        <button type='submit'>Save this weather information</button>
      </form>
    </div>
  )
}

export default User