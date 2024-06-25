import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Nav from "./Nav"
import { Routes,Route } from "react-router-dom"

function Rounting(){
    return(
        <div>
            <Nav name="Freshy Hub"></Nav>
            <Routes>    

                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/About" element={<About></About>}></Route>
                <Route path="/Contact" element={<Contact></Contact>}></Route>
                
                
            </Routes>

        </div>
    )
}
export default Rounting