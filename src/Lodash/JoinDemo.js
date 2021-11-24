import React from 'react'
import _ from 'lodash'
export default function JoinDemo() {

    let arr = ['Khai', 'Nam', 'Minh'];
    let arrPerson = [
        { id: 1, name: 'May' },
    { id: 2, name: 'tho' },
    { id: 3, name: 'bull' },
    ]

    //es6
    const result = arr.join('-');

    //lodash
    const resultLodash = _.join(arr, '*')

    const person = _.find(arrPerson, item => item.id === 2);
    return (
        <div>
            {result}
            <br />
            {resultLodash}
            <div>
                <p>nam: {person.name} - id: {person.id}</p>
            </div>
        </div>
    )
}
