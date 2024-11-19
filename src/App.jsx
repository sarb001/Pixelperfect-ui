
import './App.css'
import { Header } from './components/Header'
import { Mainview } from './components/Mainview'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
   <>
      <div className = "grid grid-cols-[1fr,6fr]" >
        <div className='bg-[#1E2640] pt-4 pb-4 pl-[10px] pr-[10px] text-white '>  <Sidebar /> </div>
        <div className='bg-green-600'>
           <Header />
           <Mainview />
        </div>
      </div>
   </>
  )
}

export default App
