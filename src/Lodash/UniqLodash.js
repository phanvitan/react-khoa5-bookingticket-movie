import React from 'react'
import _ from 'lodash'

export default function UniqLodash() {
const arr = [1,2,2,2,2,4,5,6];
console.log(_.uniq(arr));

const arr2 = [
    {id:'1',name:'may',price:'2000'},
    {id:'1',name:'may',price:'8000'},
    {id:'2',name:'m33ay',price:'2000'},
    {id:'133',name:'may44',price:'4000'},
    {id:'21',name:'may9999',price:'5000'},
];
console.log('result',_.uniqBy(arr2,'price'))

    return (
        <div>
            777777777
        </div>
    )
}
