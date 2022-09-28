import React from 'react'
import { Outlet } from 'react-router'
import { ContactLink } from '../ContactLink'
import { Footer } from '../Footer'
import { NavbarContainer } from '../Navbar'

export function MainLayoutContainer() {
  return (
    <>
      <main className="section" id="home">
        <NavbarContainer />
        <Outlet />
      </main>
      <ContactLink />
      <Footer />
    </>
  )
}
