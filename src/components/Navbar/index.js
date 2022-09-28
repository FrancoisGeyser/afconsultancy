import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import { Context } from '../../context'

export function NavbarContainer() {
  const [mobMenuOpen, setMenu] = React.useState(false)
  const { ID, scrollToID } = React.useContext(Context)
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = (value) => {
    if (location.pathname != '/') {
      navigate('/')
      setTimeout(() => scrollToID(value), 100)
    } else {
      scrollToID(value)
    }
  }

  const addStyles = (styles) => {
    return `${styles} ${mobMenuOpen ? 'navbar_menu_button_active' : ''}`
  }

  const toggleMenu = () => setMenu(!mobMenuOpen)

  return (
    <main className="navbar">
      <section className="container">
        <div className="navbar_content">
          <div className="navbar_logo" onClick={() => handleClick('home')}>
            afConsultancy
          </div>
          <div onClick={toggleMenu} className={addStyles('navbar_menu_button')}>
            Меню
          </div>
          <div
            onClick={toggleMenu}
            className={addStyles('navbar_menu_button_close')}
          >
            X
          </div>
          <div className="navbar_menu">
            <div className="navbar_menu_links">
              <span
                className="navbar_link"
                onClick={() => handleClick('studio')}
              >
                Studio
              </span>
              <span
                className="navbar_link"
                onClick={() => handleClick('projects')}
              >
                Projects
              </span>
              <span
                className="navbar_link"
                onClick={() => handleClick('contact')}
              >
                Contact
              </span>
            </div>
          </div>
          <div className={addStyles('navbar_overlay')} onClick={toggleMenu}>
            <span onClick={() => handleClick('studio')} className="navbar_link">
              Studio
            </span>
            <span
              onClick={() => handleClick('projects')}
              className="navbar_link"
            >
              Projects
            </span>
            <span
              onClick={() => handleClick('contact')}
              className="navbar_link"
            >
              Contact
            </span>
          </div>
        </div>
        <div className="navbar_bottom">
          <div className="navbar_border" />
        </div>
      </section>
    </main>
  )
}
