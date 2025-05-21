import './App.css'
import Footer from './components/Footer'
import Info from './components/Info'
import ButtonLinks from './components/ButtonLinks'

import profile from './assets/kelly.jpg'

function App() {
  return (
    <div className='border rounded-lg bg-[#1a1c22] w-min my-10'>
      <img src={profile} className='w-full rounded-t-lg'/>

      <div className='px-10'>
        <div className='text-center mt-4'>
          <h1 className='text-white text-4xl font-bold'>Kelly Tiengane</h1>
          <p className='text-amber-700 my-2'>Frontend Developer</p>
        </div>
        
        <ButtonLinks />
        
        <Info />
      </div>

      <Footer />
    </div>
  )
}

export default App
