import { ArrowDropDown, LaptopWindows, Notifications, Search } from "@material-ui/icons"
import { useState } from "react"
import "./navbar.scss"

const Navbar = () => {

  const[isScrolled, setIsScrolled] = useState(false)

  window.onscroll =()=>{
    setIsScrolled(window.pageYOffset === 0? false:true)
    return ()=>(window.onScroll=null)
  }
  // console.log(isScrolled)
  return (
    <div className = {isScrolled?"navbar scrolled":"navbar"}>
  <div className="container">
  <div className="left">
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
    <span>Homepage</span>
    <span>Series</span>
    <span>Movies</span>
    <span>New and Popular</span>
    <span>My list</span>
  </div>
  <div className="right">
    <Search className="icon"/>
    <span>KIDS</span>
    <Notifications className="icon"/>
    <img src="https://i.pinimg.com/564x/4c/fc/46/4cfc46574cbe2636944a364794de7bab.jpg" alt="" />
    <div className="profile">
    <ArrowDropDown className="icon"/>
    <div className="options">
      <span>Settings</span>
      <span>Logout</span>
    </div>
    </div>
   
  </div>
  </div>
    
    </div>
    
  )
}

export default Navbar