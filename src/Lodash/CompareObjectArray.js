import React from 'react'
import _ from 'lodash'
export default function CompareObjectArray() {
    const arrA = [1, 2];
    const arrB = [2, 1];
    const result = _.isEqual(arrA.sort(), arrB.sort());
    console.log('result', result)

    const arrObject1 = [{ id: 1, name: 'may' }, { id: 277, name: 'deee' }];
    const arrObject2 = [{ id: 1, name: 'may' }, { id: 24, name: 'dee444e' }];
    const result1 = _.differenceWith(arrObject1, arrObject2, _.isEqual);
    console.log('result', result1)

    const arrObject3 = [{ id: 1, name: 'may' }, { id: 277, name: 'deee' }];
    const arrObject4 = [{ id: 1, name: 'may' }, { id: 24, name: 'dee444e' },{ id: 6, name: 'bill' }];
    const result2 = _.differenceWith(arrObject4, arrObject3, _.isEqual);
    console.log('result', result2)

    return (
        <div>
            888888
        </div>
    )
}
