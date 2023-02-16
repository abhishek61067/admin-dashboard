import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './assets/scss/app.scss';
import Dashboard from '../pages/Dashboard';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import CardComp from '../pages/Dashboard/CardComp';
import {Container, Row, Col} from "reactstrap";
import { fas } from '@fortawesome/free-solid-svg-icons'
  // import { fas } from '@fortawesome/free-solid-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import SideBarContainer from './components/layout/SideBarContainer';

function App() {
library.add(fas);
// library.add(fab);
  const [count, setCount] = useState(0)

  return (
  <>
  <Router>
    <Header/>
    <SideBarContainer/>
    <div className="main-content">
      <div className="page-content">
  <Dashboard/> 
  
      </div>
    </div>
    <Footer/>
  </Router>
  </>
  )
}

export default App
