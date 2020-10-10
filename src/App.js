import React from "react"
import { observer } from "mobx-react"
import Items from './components/Items'
import ctrl from './App.store'

@observer
export default class App extends React.PureComponent {
    render() {
        return (
            <div>
                <Items/>
                <div onClick={ctrl.reloadItems}>Reload</div>
            </div>
        )
    }
}
