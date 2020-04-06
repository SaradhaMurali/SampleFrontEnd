import React from "react"

function Joke(props){
    return (
        <div>
    <h2 style = {{ color : !props.answer && "#FF0000"}}>Question : {props.question}</h2>
    <h2>Answer : {props.answer}</h2>
    <hr/>
    </div>
    )
}

export default Joke