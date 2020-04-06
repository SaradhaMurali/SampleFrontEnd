import React, { Component } from "react"

class TextBox extends Component{
    constructor(){
        super()
        this.state ={
            firstName : "",
            lastName : "",
            age:"",
            state:"",
            isaccept: false,
            gender:""
        }
        this.textChange = this.textChange.bind(this)
    }

    textChange(event){
    const {name,value} =  event.target
        this.setState({
            [name] : value
        })
    }
    onSumbit(){

    }
    render(){
        return(
            <form className="form-style" onSumbit>
                <div className="div-style">
                <input type="text" name = "firstName" placeholder= "First Name" onChange={this.textChange}/>
                <br/><br/>
                <input type="text" name="lastName" placeholder= "Last Name" onChange={this.textChange}/>
                <br/>
                <br/>
                <input type="text" name="age" placeholder= "Age" onChange={this.textChange}/>
                <br/>
                <br/>
                <input type="radio" name="gender" value="male" checked={this.state.gender==="male"} onChange={this.textChange}/>
                <label>Male</label>
                <input type="radio" name="gender" value="female" checked={this.state.gender==="female"} onChange={this.textChange}/>
                <label>Female</label>
                <br/>
                <br/>
                <select name="state" value = {this.state.state} onChange={this.textChange}>
                    <option>Kerala</option>
                    <option>Tamil Nadu</option>
                    <option>Karnataka</option>
                    <option>Andra</option>
                </select>
                <br/>
                <br/>
                <button> Submit</button>
                </div>
            </form>
        )
    }
}
export default TextBox