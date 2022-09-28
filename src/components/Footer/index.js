import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import { Context } from '../../context'

export function Footer() {
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

  return (
    <main className="section">
      <section className="footer_container">
        <div className="navbar_logo footer" onClick={() => handleClick('home')}>
          afConsultancy
        </div>
        <div className="navbar_menu footer">
          <div className="navbar_menu_links footer">
            <span className="navbar_link" onClick={() => handleClick('studio')}>
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
        <span>&#169; 2022 afConsultancy</span>
      </section>
    </main>
  )
}
