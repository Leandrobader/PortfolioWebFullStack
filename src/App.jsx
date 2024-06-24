import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Components/Nav';
import Foot from './Components/Foot';
import Home from './Components/Pages/Home';

function App() {

  return (
    <>
    <BrowserRouter>
    <header>
    <Nav></Nav>
    </header>

    <main>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
    </main>

    <footer>
    <Foot></Foot>
    </footer>
    </BrowserRouter>
    </>
  )
}

export default App
