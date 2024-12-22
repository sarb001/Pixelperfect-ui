
import './App.css'
import { Header } from './components/Header'
import { Mainview } from './components/Mainview'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
   <>
      <div className = "flex grid-cols-[1.2fr,5.5fr]" >
        <div className = 'bg-[#1E2640] pt-4 pb-4 pl-[10px] pr-[10px] text-white h-screen fixed w-56 '>
            <Sidebar />
          </div>
        <div className = 'ml-56 overflow-y-auto flex-1'> 
           <Header />
           <Mainview />
        </div>
      </div>
   </>
  )
}

export default App
