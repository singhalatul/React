import { useState } from 'react'

function App() {
  const [color,setColor] = useState("olive");

  const changeColor = (color)=>{
    const colors =["red","pink","olive","green","white","blue"]
     for(let i=0;i<colors.length;i++){
      if(colors[i]==color){
        setColor(colors[i])
      }
     }
    }
  
  return (
    <>
    <div className="w-full h-screen duration-200"  
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 shadow-lg">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-small"
          style={{backgroundColor:"red"}}
          onClick={()=>changeColor("red")}
          >red</button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-small"
          style={{backgroundColor:"green"}}
          onClick={()=>setColor("green")}
          >Green</button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-small"
          style={{backgroundColor:"blue"}}
          onClick={()=>setColor("blue")}
          >Blue</button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-small"
          style={{backgroundColor:"olive"}}
          onClick={()=>setColor("olive")}
          >Olive</button>
          <button
          className="outline-none px-4 py-1 rounded-full text-black shadow-small"
          style={{backgroundColor:"white"}}
          onClick={()=>setColor("white")}
          >White</button>
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-small"
          style={{backgroundColor:"pink"}}
          onClick={()=>setColor("pink")}
          >Pink</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
