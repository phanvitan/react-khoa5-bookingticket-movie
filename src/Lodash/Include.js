import React from 'react'
import _ from 'lodash'
export default function Include() {
    const arr = ['1','2','3'];
    console.log(_.includes(arr,'1'));
    const object = {id:1,name:'may',age:18};
    console.log('ket qua',_.includes(object,'may'));
    
    return (
        <div>
            111
        </div>
    )
}
