import { Route, Routes } from "react-router"
import NavBar from "./components/NavBar"
import HomePage from "./routes/HomePage"
import ListPage from "./routes/ListPage"

    
const App = () => {
  return (
    <div className="lg:w-[75%] lg:m-auto">
    <NavBar/>
   <Routes>
    <Route path="/" element={ <HomePage/>}/>
    <Route path="/list" element={<ListPage/>}/>
   </Routes>
    </div>
  )
}

export default App