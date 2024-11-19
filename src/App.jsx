
import './App.css'
import { Header } from './components/Header'
import { Mainview } from './components/Mainview'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
   <>
      <div className = "grid grid-cols-[1fr,6fr]" >
        <div className='bg-lime-400'>  <Sidebar /> </div>
        <div className='bg-green-600'>
           <Header />
           <Mainview />
        </div>
      </div>
   </>
  )
}

export default App
