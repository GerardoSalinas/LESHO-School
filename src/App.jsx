import { Footer } from "./components/Footer"
import { NavBar } from "./components/NavBar"
import { Alphabet } from "./pages/Alphabet"
import { General } from "./pages/General"
import { Phrases } from "./pages/Phrases"
import { Credits } from "./pages/Credits" 
import { FAQ } from "./pages/FAQ"
import { BrowserRouter, Routes, Route, Outlet } from 'react-router' 
import './App.css'

function App() {
  const Layout = () => {
    return (
      <>
        <NavBar/>
        <Outlet/>
        <Footer/>
      </>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<General/>}/>
          <Route path="alfabeto" element={<Alphabet/>} />
          <Route path="frases" element={<Phrases/>} />
          <Route path="FAQ" element={<FAQ/>} />
          <Route path="creditos" element={<Credits/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
