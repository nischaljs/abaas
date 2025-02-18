import NavBar from "./components/NavBar"
import HomePage from "./routes/HomePage"

    
const App = () => {
  return (
    <div className="lg:w-[75%] lg:m-auto">
    <NavBar/>
    <HomePage/>
    </div>
  )
}

export default App