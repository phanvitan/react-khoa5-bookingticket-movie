import _ from 'lodash';
import React from 'react'

export default function FillLodash() {

var arr = [
    {id:1,name:'may'},
    {id:2,name:'bill'},
    {id:3,name:'nui'},
    {id:4,name:'bien'},
    {id:5,name:'song'},
];
_.fill(arr,{id:5, name:'1111111yyyyyyy'},1,4)
console.log('arr',arr);
    return (
        <div>
            
        </div>
    )
}
