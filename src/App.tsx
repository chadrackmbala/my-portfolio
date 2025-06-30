import { useEffect, useState } from 'react';
import './App.css';
import LeftSide from './Components/Desktop/left-side';
import OverLeftSide from './Components/Desktop/over-lef-side';
import RightSide from './Components/Desktop/right-side';
import Home from './Components/Mobile/home';

function App() {
  // 🔹 State pour suivre la largeur de l’écran
  const [width, setWidth] = useState(window.innerWidth);

  // 🔹 Met à jour le state à chaque redimensionnement
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // 🔸 Nettoyage pour éviter les fuites mémoire
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {width >= 768 ? (
        <>
          {/* Élément fixé au-dessus */}
          <div className="fixed top-0 left-0 w-full z-20">
            <OverLeftSide />
          </div>

          {/* Contenu principal en dessous */}
          <div className="bg-[#3A3A3A] top-0 flex justify-between ">
            <div className="w-1/2 h-full">
              <LeftSide />
            </div>
            <div className="w-1/2 h-full">
              <RightSide />
            </div>
          </div>
        </>
      ) : (
        // 📱 Vue Mobile : juste "Bonjour"
        <div className="h-screen flex items-center justify-center bg-[#3A3A3A] text-white text-2xl">
          <Home/>
        </div>
      )}
    </>
  );
}

export default App;
