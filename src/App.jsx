import React, { useState } from 'react'

const App = () => {
  const [son , setSon] = useState(0);
  const plus = () => {
    setSon((prosto) => prosto + 1)
  }
  const minus = () => {
    if(son > 0){
      setSon((prosto) => prosto - 1)
    }else{
      setSon((prosto) => prosto)
    }
  }
  return (
    <div>
      <h1>{son}</h1>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
    </div>
  )
}

export default App