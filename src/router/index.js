import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Error } from '../components/Error'
import { MainLayoutContainer } from '../components/MainLayout'
import { MainContainer } from '../containers/Main'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayoutContainer />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <MainContainer />,
          },
          {
            path: 'projects/:id',
            element: <p>project id page</p>,
          },
        ],
      },
    ],
  },
])
