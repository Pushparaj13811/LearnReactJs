import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {

  const imgOfBrie = "https://imgs.search.brave.com/tRfz5MRdHJzgCwpYzF4sUWr-cp4SpMbJnzdnZ8C2me0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wZW9w/bGUuY29tL3RobWIv/dmV1Z0FqZjhXUmJJ/MjU0d2E4Q0x1amYw/Um84PS8xNTAweDAv/ZmlsdGVyczpub191/cHNjYWxlKCk6bWF4/X2J5dGVzKDE1MDAw/MCk6c3RyaXBfaWNj/KCk6Zm9jYWwoOTk5/eDA6MTAwMXgyKS9i/cmllLWxhcnNvbi1j/YXB0YWluLW1hcnZl/bC0yMDAwLWNmYmE4/NTRmZGM2YzRmOTk4/ODU1ZWYwOTA3MjQy/NGI1LmpwZw";
  const imgOfPushparaj = "https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/432569739_722813613296682_9176298499149643320_n.jpg?stp=dst-jpg_s640x640&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ranTtv4OWPMAX8PsZT-&_nc_ht=scontent-bom1-1.xx&oh=00_AfCKN2GQt6RwsTVZWep7d8i-hs9hLIgc3fWrAEXIoVTMNw&oe=65F66C44";
  return (
    <>
      <h1 className='bg-blue-500 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card name='Pushparaj' image={imgOfPushparaj} />
      <Card name='Brie' image={imgOfBrie} />

    </>
  )
}

export default App
