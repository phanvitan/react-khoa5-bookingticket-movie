import React from 'react'
import _ from 'lodash'

export default function LastFirstLodash() {
    const arrStudent = [
        { id: 1, name: 'May' },
        { id: 2, name: 'bull' },
        { id: 3, name: 'bi' },
    ]
    const firstItem = _.first(arrStudent);
    const lastItem = _.last(arrStudent);

     const arr = [['001','alice'],['002','may'],['003','bill']]

    const [id,name] = _.first(arr);
    const [id2,name2] = _.last(arr);

    return (
        <div className="container">
            <div>FFF : {firstItem.name}</div>
            <div>LLLL : {lastItem.name}</div>
            <hr/>

            <div>FFF : {id}-{name}</div>
            <div>FFF : {id2}- {name2}</div>

        </div>
    )
}
