import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"


function App() {
  

  return (
    <UserContextProvider>
      <div className="flex flex-col w-full h-screen justify-center items-center bg-gray-500 overflow-hidden">
        <h1 className="md:text-6xl text-white text-center text-4xl ">Chai is important </h1>
        <div className="mt-7 flex flex-col md:flex">
          <Login />
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  )
}

export default App
