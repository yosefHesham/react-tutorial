import { BrowserRouter,Routes, Route } from "react-router-dom"
import About from "../pages/about"
import NotMatch from "../pages/not_match"
import Navbar from "./nav_bar"
import TodoContainer from "./todoContainer"


const RouterHandler = () => {
  return (
<>
   
    <BrowserRouter>
    
    <Navbar/>
    <Routes>
      <Route  path="/" element={<TodoContainer />}/>
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotMatch />}>
        
       
      </Route>
    </Routes>
    </BrowserRouter>
    
    </>

  )
}

export default RouterHandler