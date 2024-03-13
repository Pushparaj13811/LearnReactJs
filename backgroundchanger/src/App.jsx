import { useState } from 'react'
import './index.css'

function App() {
  let [color, setColor] = useState('green')
  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>

      <div className=' fixed flex flex-wrap justify-center rounded-lg flex-column bottom-10  inset-x-0 p-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-gray-200 px-2 py-2 rounded-3xl'>
          <button onClick={() => setColor('red')} className='outline-none px-3 py-2 rounded-xl' style={{ backgroundColor: "red" }} >red</button>
          <button onClick={() => setColor('green')} className='outline-none px-3 py-2 rounded-xl' style={{ backgroundColor: "green" }}>green</button>
          <button onClick={() => setColor('blue')} className='outline-none px-3 py-2 rounded-xl' style={{ backgroundColor: "blue" }} >blue</button>
          <button onClick={() => setColor('olive')} className='outline-none px-3 py-2 rounded-xl' style={{ backgroundColor: "olive" }}>olive</button>
          <button onClick={() => setColor('pink')} className='outline-none px-3 py-2 rounded-xl' style={{ backgroundColor: "pink" }}>pink</button>
          <button onClick={() => setColor('darkblue')} className='outline-none px-3 py-2 rounded-xl' style={{ backgroundColor: "darkblue" }}>darkblue</button>
          <button onClick={() => setColor('gray')} className='outline-none px-3 py-2 rounded-xl' style={{ backgroundColor: "gray" }}>gray</button>
        </div>
      </div>
    </div >
  )
}

export default App
