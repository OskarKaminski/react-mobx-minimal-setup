import React from 'react'
import { observer } from "mobx-react"

const Item = ({selected, item, onSelect}) => {
    return (
        <div
            style={{
                padding: 20,
                border: '1px solid',
                marginTop: 10,
                backgroundColor: selected ? '#66cc66' : '#fff'
            }}>
            <p onClick={() => onSelect(item)}>{item.name}</p>
        </div>
    )
}

export default observer(Item)