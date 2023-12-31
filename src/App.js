import "./style.css"
import Navbar from "./components/Navbar"
import Sales from "./components/Sales"
import Catagories from "./components/Catagories"
import Recommendation from "./components/Recommendation"
import Topics from "./components/Topics"
import Popular from "./components/Popular"
import Footer from "./components/Footer"

const App = ()=>{
  return(
    <>
      <Navbar/>
      <Catagories/>
      <Sales/>
      <Recommendation/>
      <Topics/>
      <Popular/>
      <Footer/>
    </>
  )
}
export default App