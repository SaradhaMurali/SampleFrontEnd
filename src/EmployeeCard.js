import React from "react"

function EmployeeCard(props){
    console.log(props)
    return (
    <div className = "employee-card">
        <h2>Name = {props.name} </h2>
        <h3>Age = {props.age} </h3>
    <h3>Status = {props.status}</h3>
    </div>
    )
}
export default EmployeeCard