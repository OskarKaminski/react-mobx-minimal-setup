import React, { Suspense } from 'react'
import { observer } from 'mobx-react'
import AppStore from './App.store.js'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { Navigation } from './App.styles'
import HomePage from './pages/HomePage/HomePage'

const ReactMobxAppHomePage = React.lazy(() => import('reactMobxApp/HomePage'))
const ReactHooksAppHomePage = React.lazy(() => import('reactHooksApp/HomePage'))

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
        return (
            <div>
                <Router>
                    <GlobalStyle/>
                    <Navigation position="static">
                        <NavLink to="/" className={({ isActive }) => isActive ? " selected" : ""}>React + Hooks</NavLink>
                        <NavLink to="/react-mobx-homepage" className={({ isActive }) => isActive ? " selected" : ""}>React
                            + Mobx</NavLink>
                    </Navigation>
                    <Routes>
                        <Route path="/" element={
                            <Suspense fallback={'loading...'}>
                                <ReactHooksAppHomePage/>
                            </Suspense>
                        }/>
                        <Route path="/react-mobx-homepage" element={
                            <Suspense fallback={"loading..."}>
                                <ReactMobxAppHomePage/>
                            </Suspense>
                        }/>
                    </Routes>
                </Router>
            </div>
        )
    }
}
