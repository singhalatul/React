import { useCallback, useState ,useEffect,useRef} from 'react'

function App() {
  const [password, setPassword] = useState("");
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);

  const passRef = useRef(null)

  const copyToClipboard = useCallback(()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,20)
   window.navigator.clipboard.writeText(password)
  },[password])


  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllowed){
      str+="0123456789"
    }
    if(charAllowed){
      str+="!@#$%^&*()-;',.{}[]~/+"
    }

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])
  
  // console.log(randomNumber);
  return (
    <>
    <div className=" bg-hero-pattern bg-cover bg-center bg-no-repeat h-screen w-full flex flex-wrap">
      <div className="w-full">
      <div className=" text-orange-500 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700">
        <h1 className="text-white text-center mb-3">Password generator</h1>
        <div className="flex shadow-lg rounded-lg w-full overflow-hidden">
          <input
          type="text"
          value={password}
          className='w-full py-1 px-2'
          placeholder="Password"
          readOnly
          ref={passRef}
          ></input>
          <button
          onClick={copyToClipboard}
          className='rounded-r-xl bg-blue-500 hover:outline-none hover:bg-blue-800 text-white px-2 py-1'
          >Copy</button>
        </div>
        <div className='flex flex-wrap gap-x-2 mt-3 mx-1 '>
          <input type="range"
          className='cursor-pointer'
          min="8"
          max="100"
          value={length}
          onChange={(e)=> {setLength(e.target.value)}}
          ></input>
        <label >Length:{length}</label>
          <input type="checkbox"
          value={numberAllowed}
          onChange={()=>{setNumberAllowed((prev)=>!prev)}}
          ></input>
        <p>Number</p>
          <input type="checkbox"
          min="8"
          max="100"
          onChange={()=>{setCharAllowed((prev)=>!prev)}}
          value={charAllowed}
          ></input>
          <p>Character</p>
        </div>
        
      </div>
          </div>
          </div>
    </>
  )
}

export default App
