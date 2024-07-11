import { useState } from 'react'


function App() {
  const [color, setColor] = useState('gray')

 function changeBackgroundColor() {
  setColor(color)
 }
  return (
    <>
     <div className='text-4xl w-full h-screen p-10 rounded ' style={{backgroundColor:color}}>
      <button className='text-black bg-red-600 border-gray-100 p-10 rounded-lg m-5' onClick={changeBackgroundColor}>Red</button>
      <button className='text-black bg-green-600 border-gray-100 p-10 rounded-lg m-5' onClick={()=>setColor("green")} >Green</button>
      <button className='text-black bg-blue-600 border-gray-100 p-10 rounded-lg m-5' onClick={()=>setColor("Blue")}>Blue</button>
      <button className='text-black bg-amber-600 border-gray-100 p-10 rounded-lg m-5' onClick={()=>setColor("Orange")}>Orannge</button>
      <button className='text-black bg-violet-600 border-gray-100 p-10 rounded-lg m-5' onClick={()=>setColor("Violet")}>Violet</button>
      <button className='text-black bg-cyan-500 border-gray-100 p-10 rounded-lg m-5' onClick={()=>setColor("Cyan")} >Cyan</button>
      <button className='text-black bg-pink-500 border-gray-100 p-10 rounded-lg m-5' onClick={()=>setColor("Pink")}>Pink</button>
      <button className='text-white bg-black border-gray-100 p-10 rounded-lg m-5' onClick={()=>setColor("Black")}>Black</button>
     
     </div>

    </>
  )
}

export default App
