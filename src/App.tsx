
import profile from "./mock/profile.json"
import info from "./mock/site-info.json"
import bgImage from "./assets/stone_embedded_tiles_nor_gl_1k.jpg"


function App() {

  return (
    <div className={`bg-[url(${bgImage})] bg-repeat`}>

      <div className='flex flex-col gap-10 items-center justify-center p-10 
      h-auto
      min-h-dvh
      bg-fixed bg-cover bg-no-repeat bg-center 
      bg-gradient-to-r 
      from-indigo-500/80 
      to-purple-500/80 
    '>

        <div className="grid grid-cols-2 grid-rows-1 items-center justify-center
        bg-white/10 backdrop-blur-[3px] p-10 rounded-lg  w-3/4 min-h-96
        
        max-md:flex max-md:flex-col max-md:grid-cols-none"
          style={{
            gridTemplateColumns: "1fr 30%",
            gridTemplateRows: "1fr",
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className='text-2xl font-bold text-zinc-200'> {profile.name}</h1>
            <h2 className='text-lg font-bold text-zinc-200'> {profile.title}</h2>
          </div>

          <div className="container flex items-center justify-center h-full w-full 
         bg-white/90 rounded-lg m-2 p-5">

            <div
              className=" container w-full h-full  bg-cover bg-no-repeat bg-center rounded-lg "
              style={{
                backgroundImage: `linear-gradient(to bottom, transparent 80%, rgba(255,255,255,0.9)), url(${profile.avatar})`,
              }}
            ></div>
          </div>

        </div>

        <div className="container flex flex-col items-center justify-center
        bg-white/30 backdrop-blur-lg p-10 rounded-lg w-3/4 ">

          <div className='container flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-bold text-zinc-200'> {info.contact.title}</h1>


            <div className=" container flex flex-col items-center justify-center
            bg-white/30 p-10 rounded-lg w-full">

              <div className='flex flex-col items-center justify-center w-full'>
                <h1 className='text-xl font-bold text-zinc-200'> Email: {info.contact.email}</h1>
                
              </div>

              <div className='flex flex-col items-center justify-center'>
                <h1 className='text-xl font-bold text-zinc-200'> Phone: {info.contact.phone}</h1>
              </div>
              

            </div>
          </div>

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
    </div>
  )
}

export default App
