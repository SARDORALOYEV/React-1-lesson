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
    <div className='w-full h-[100vh] flex justify-center items-center flex-col'>
      <h1 className="text-4xl font-bold text-center text-blue-600 my-4">{son}</h1>
<div className="flex gap-3 justify-center">
<button className="bg-green-500 text-white px-4 py-2 rounded mr-2" onClick={plus}>Plus</button>
<button className="bg-red-500 text-white px-4 py-2 rounded" onClick={minus}>Minus</button>

</div>
    </div>
  )
}

export default App