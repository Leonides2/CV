
import profile from "./mock/profile.json"
import info from "./mock/site-info.json"


function App() {

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r 
    from-indigo-500 
    to-purple-500 '>

      <div className="card flex flex-col items-center justify-center
        bg-white/30 backdrop-blur-lg p-10 rounded-lg m-2 w-3/4">
        <div className="flex items-center justify-center w-24 h-24 
        rounded-full
         bg-white/40">

        </div>
        <h1 className='text-2xl font-bold'> {profile.name}</h1>
      </div>
      
      <div className="flex flex-col items-center justify-center
        bg-white/30 backdrop-blur-lg p-10 rounded-lg w-3/4 ">

        <div className='flex flex-col items-center justify-center'>


        </div>

      </div>
      <p className="container mx-auto text-center text-gray-300">
        {info.about.description}
      </p>
    </ div>
  )
}

export default App
