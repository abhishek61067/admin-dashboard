import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme';
import { MenuContext } from '../../context/menu';
import { ProfileIconContext } from '../../context/ProfileIcon';


const Header = () => {
  const [{theme,isDark}, toggleTheme] = useContext(ThemeContext);
  const [{menuClass, isCollapsed}, toggleMenu] = useContext(MenuContext);
  const [{ProfileIconClass, isProfileCollapsed}, toggleProfileIcon] = useContext(ProfileIconContext);

  return (
    <header className={isCollapsed?"page-topbar collapsed": "page-topbar"}>
      <div className="navbar-header">
        <div className="d-flex w-100 justify-content-between">
          <div>
            <button
              type="button"
              onClick={toggleMenu}
              className="btn btn-sm px-3 font-size-16 header-item"
              id="vertical-menu-btn"
            >
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            </button>
          </div>
          <div className="header-navigation d-flex">
<button className='theme-icon mx-4' onClick={toggleTheme}>
{
  isDark?
              (<FontAwesomeIcon icon="fa-solid fa-sun" className="p-1"/>)
:
           ( <FontAwesomeIcon icon="fa-solid fa-moon" className="p-1"/>)

}
</button>

<div className="profileIcon position-relative">
            <FontAwesomeIcon icon="fa-solid fa-user" className="p-1" onClick={toggleProfileIcon}/>
 {
              isProfileCollapsed && (
                <div className="d-flex position-absolute dropdown-menu--profile">
                   <span className='fs-6 fw-normal p-2 rounded-2'>Logout</span>
                </div>
              )
            }
</div>
           
            <FontAwesomeIcon icon="fa-solid fa-gear" className="p-1"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;