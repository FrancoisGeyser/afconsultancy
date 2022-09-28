import React from 'react'
import { ProjectLink } from '../../components/ProjectLink'
import { Studio } from '../../components/Studio'
import { Hero } from '../../components/Hero'

export function MainContainer() {
  return (
    <>
      <Hero />
      <Studio />
      <ProjectLink />
    </>
  )
}
