import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
    position: absolute;
    top: 50px;
    left: 50px;
    list-style-type: initial;
    display: block;

    li {
        margin-bottom: 10px;
        display: block;
    }
`


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
        <List>
            {list}
        </List>
        :
        null
    )
}


export default StateList