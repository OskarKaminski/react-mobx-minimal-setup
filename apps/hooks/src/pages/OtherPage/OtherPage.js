import React from 'react'
import { observer } from 'mobx-react'

export default observer(() => {
    // class Egg extends Function{
    //     constructor(args) {
    //         super('return "this is an eggs"')
    //     }
    // }

    function Egg(name){
        const fn = function (){
            return 'this is an ' + name
        }
        return fn
    }
    // Egg.prototype = Object.create(Function.prototype)

    const egg = new Egg('eggo')



    // const obj = Object.create(this, {
    //     callable
    // })

    console.log(egg())

    return (
            <div>
                <p>This is the other pagesssaae</p>
            </div>
        )
    }
)