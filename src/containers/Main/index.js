import React from 'react'
import { ProjectLink } from '../../components/ProjectLink'
import { About } from '../../components/About'
import { Hero } from '../../components/Hero'

export function MainContainer() {
  return (
    <>
      <Hero />
      <About />
      <ProjectLink />
    </>
  )
}
