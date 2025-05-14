import './App.css'
import Footer from './components/Footer'
import Info from './components/Info'
import ButtonLinks from './components/ButtonLinks'

import profile from './assets/kelly.jpg'

function App() {
  return (
    <div>
      <img src={profile} className='w-50'/>

      <h1>Kelly Tiengane</h1>
      <p>Frontend Developer</p>
      
      <ButtonLinks />
      
      <Info />

      <Footer />
    </div>
  )
}

export default App
