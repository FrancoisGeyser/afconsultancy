import React from 'react'
import { Context } from '../context'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const usePageUpdate = (pageID) => {
  const { setID } = React.useContext(Context)

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.create({
      trigger: `#${pageID}`,
      start: 'top center',
      end: 'bottom center',
      onToggle: () => setID(pageID),
    })
  }, [])
}
