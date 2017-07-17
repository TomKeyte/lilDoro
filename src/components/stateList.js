import React from 'react'


const StateList = (props) => {
    let list = []
    for (let p in props) {
        if (typeof props[p] !== 'function') {
            list.push(
                <li key={p}>{p} : {props[p].toString()}</li>
            )
        }
    }

    return (
        window.location.hostname === 'localhost' ?
        <ul className='state'>
            {list}
        </ul>
        :
        null
    )
}


export default StateList