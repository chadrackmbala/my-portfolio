import './App.css'
import LeftSide from './Components/left-side'
import OverLeftSide from './Components/over-lef-side'
import RightSide from './Components/right-side'

function App() {

  return (
    <>
  {/* Élément fixé au-dessus */}
  <div className="fixed top-0 left-0 w-full z-20">
    <OverLeftSide />
  </div>

  {/* Contenu principal en dessous */}
  <div className="bg-[#3A3A3A] flex  justify-between">
    {/* Ajuste le padding-top selon la hauteur de OverLeftSide */}

    <div className="w-1/2 h-full">
      <LeftSide />
    </div>

    <div className="w-1/2 h-full">
      <RightSide />
    </div>
  </div>
</>

  )
}

export default App
