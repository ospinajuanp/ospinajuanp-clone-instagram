import { Routes, Route, Outlet, Link } from "react-router-dom";
import PageProfile from './page/PageProfile'
import PageHome from './page/PageHome'
import './App.css'


function App(){
  return (
    <Routes>
        <Route index element={<PageHome />} />
        <Route path="/profile/:username" element={<PageProfile />} />
    </Routes>
    // <main className='App'> 
    // hola
    
    //   {/* <PageProfile/> */}
    //   {/* <PageHome/>  */}
    // </main>
  )
}

export default App
