import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Layout from './components/common/Layout'
import { Home } from './pages/Home'

interface IAppRoutesProps {
  isAuthorized: boolean;
}

const AppRoutes = (isAuthorized: IAppRoutesProps): JSX.Element => (
  isAuthorized
    ? <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    : <h1>lol</h1>
)

export default AppRoutes
