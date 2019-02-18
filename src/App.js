import React from "react";
import { observer } from "mobx-react";
import AppStore from './App.store.js'

@observer
export default class App extends React.Component {
    onClick() {
        AppStore.number++
    }

    render() {
        return (
            <div>
                {AppStore.number}
                <div onClick={this.onClick}>Click me</div>
            </div>
        );
    }
}
