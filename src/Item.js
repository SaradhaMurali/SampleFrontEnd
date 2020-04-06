import React from "react"


function Item(props){
    return (
    <div>
        <CheckBox/>
        <p>{props.item.text}</p>
    </div>
    )
}

function CheckBox(){
    return (
        <input type = "checkBox"/>
    )
}
export default Item