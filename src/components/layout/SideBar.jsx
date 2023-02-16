import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { MenuContext } from '../../context/menu';


const SideBar = () => {
  const [{menuClass, isCollapsed}, toggleMenu] = React.useContext(MenuContext);
  return (
    <div className="h-100">
      <div id="sidebar-menu">
        <ul className="list-unstyled" id="side-menu">
          <li className="menu-title mx-4 px-4">Menu</li>
          <li>
            <Link to="/users" className="menu-item py-3 text-sm my-0 mx-4 px-4 d-flex align-items-center">
              <div className="menu-pill">
                <FontAwesomeIcon icon="fa-solid fa-users" />
              </div>
              {isCollapsed && <span>Users</span>}
              </Link>
          </li>
          <li>
            <Link to="/calendar" className="menu-item py-3 text-sm my-0 mx-4 px-4 d-flex align-items-center">
              <div className="menu-pill">
                <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
              </div>
              {isCollapsed && <span>Calendar</span>}
            </Link>
          </li>
          <li>
            <Link to="/e-commerce" className="menu-item py-3 text-sm my-0 mx-4 px-4 d-flex align-items-center">
              <div className="menu-pill">
                <FontAwesomeIcon icon="fa-solid fa-cart-arrow-down" />
              </div>
              {isCollapsed && <span>E-commerce</span>}
            </Link>
          </li>
          <li>
            <Link to="/email" className="menu-item py-3 text-sm my-0 mx-4 px-4 d-flex align-items-center">
              <div className="menu-pill">
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
              </div>
              {isCollapsed && <span>E-mail</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar;