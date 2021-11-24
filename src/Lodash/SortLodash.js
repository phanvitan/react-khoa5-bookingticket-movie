import React from 'react'
import _ from 'lodash'
export default function SortLodash() {

const user =[
    {id:5,name:'fred',age:48},
    {id:3,name:'kaito',age:36},
    {id:4,name:'bake',age:40},
    {id:6,name:'bake',age:4},
    {id:9,name:'bake',age:49},
    {id:7,name:'juld',age:34},
]
const resultSortByName=_.sortBy(user,[item=>item.age]);
console.log('resultSortByName',resultSortByName)

const result =_.sortBy(user,['age','name']);
console.log('result',result);
    return (
        <div>
            
        </div>
    )
}
