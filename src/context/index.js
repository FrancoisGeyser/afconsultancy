import React, { createContext, useEffect, useState } from 'react'

export const Context = createContext()

export const ContextProvider = (props) => {
  const [ID, setID] = useState('home')

  const scrollToID = (id) => {
    setID(id)
    let elmnt = document.getElementById(id)
    elmnt.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <Context.Provider
      value={{
        ID,
        setID,
        scrollToID,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}
