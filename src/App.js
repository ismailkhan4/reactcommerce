import React, { Fragment } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AddItems, Checkout, Home, Items } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/items',
    element: <Items />
  },
  {
    path: '/add-items',
    element: <AddItems />
  },
  {
    path: '/checkout',
    element: <Checkout />
  }
])

const App = () => {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  )
}

export default App