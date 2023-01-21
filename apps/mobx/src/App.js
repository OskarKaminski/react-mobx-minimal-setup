import React from 'react'
import { observer } from 'mobx-react'
import AppStore from './App.store.js'
import { createGlobalStyle } from 'styled-components'
import HomePage from './pages/HomePage/HomePage'
import OtherPage from './pages/OtherPage/OtherPage'
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom'
import { Navigation } from '../../../src/App.styles'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 100;

    input, textarea {
      font-weight: 100 !important;
    }
  }
`

@observer
export default class App extends React.Component {
    onClick() {
        AppStore.number++
    }

    render() {
        return <div>
            <Router>
                <GlobalStyle/>
                <Navigation position="static">
                    <NavLink to="/" className={({ isActive }) => isActive ? " selected" : ""}>Home</NavLink>
                    <NavLink to="/other-page" className={({ isActive }) => isActive ? " selected" : ""}>Other page</NavLink>
                </Navigation>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/other-page" element={<OtherPage/>}/>
                </Routes>
            </Router>
        </div>
    }
}
