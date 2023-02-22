import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './assets/scss/app.scss';
import Dashboard from '../pages/Dashboard';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import CardComp from '../pages/Dashboard/CardComp';
import {Container, Row, Col} from "reactstrap";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import SideBarContainer from './components/layout/SideBarContainer';
import { MenuContext } from './context/menu';
import Users from '../pages/Users';

// export const [dropdowns, setDropDowns] = useState("hide");
function App() {
  
  // removeDropdowns = ()=>{
  //   setDropDowns("hide")
  // }
library.add(fas);
// library.add(fab);
  const [count, setCount] = useState(0);
  const [{menuClass, isCollapsed}, toggleMenu] = useContext(MenuContext);

  return (
  <>
  <Router>
    <div className={menuClass} >
<Header/>
    <SideBarContainer/>
    <div className={isCollapsed?"main-content collapsed":"main-content"}>
      <div className="page-content">
        <Routes>
<Route path="/" element={<Dashboard/>}/>
<Route path="/users" element={<Users/>}/>
        </Routes>
  
      </div>
    </div>
    <Footer/>
    </div>
    
  </Router>
  </>
  )
}

export default App
