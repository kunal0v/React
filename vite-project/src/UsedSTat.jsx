import React,{useState} from 'react'

const UsedSTat = () => {
    let[value,setvalue]=useState(0);
    return (
    <div>
        <h1>{value}</h1>
        <button onClick={change}> Click here</button>
    </div>
    )
}
export default UsedSTat
