import { AcUnit } from "@material-ui/icons"
import "./home.scss"
import Navbar from "../components/navbar/Navbar"


const Home = () => {
  return (
    <div className  = "home">
    <Navbar/>
    <img  width = "100%" src="https://i.pinimg.com/474x/7c/b2/38/7cb238b1eb3bc2d92d19afd891a112cd.jpg" alt="" />
    </div>
  )
}

export default Home
