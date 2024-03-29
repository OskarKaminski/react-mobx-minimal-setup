import React from 'react'
import { observer } from 'mobx-react'
import ctrl from './HomePage.ctrl'

export default observer(() => (
        <div>
            <div>
                Current number: {ctrl.number}
            </div>
            <div style={{marginTop: 30}}>
                <button onClick={ctrl.increment}>Increment</button>
            </div>
        </div>
    )
)