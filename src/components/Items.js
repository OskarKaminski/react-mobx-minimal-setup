import React from 'react'
import ctrl from '../App.store'
import Item from './Item'
import { observer } from "mobx-react"

const Items = () => {
    return ctrl.items.map(item => {
        const selected = ctrl.selectedItem?.id === item.id
        return (
            <Item item={item}
                  key={item.id}
                  selected={selected}
                  onSelect={ctrl.selectItem}/>
        )
    })
}

export default observer(Items)