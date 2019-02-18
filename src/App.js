import React from "react";
import { observer } from "mobx-react";
import AppStore from './App.store.js'

export default observer(
    class App extends React.Component {
        onClick() {
            AppStore.number.set(AppStore.number.get() + 1)
        }

        render() {
            return (
                <div>
                    {AppStore.number.get()}
                    <div onClick={this.onClick}>Click me</div>
                </div>
            );
        }
    }
)
