import { Route, Routes } from "react-router-dom";
import './App.css'

import Nav from "./components/Nav"
import Home from "./components/Home"
import Drinks from "./components/Drinks"
import DrinkPage from "./components/DrinkDetails"


function App() {

    return (
        <div className="app">
            <header>
                <Nav/>
            </header>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/:id" element={<Drinks />} />
            </Routes>

        </div>
    )
}

export default App
