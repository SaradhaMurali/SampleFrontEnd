import React from "react"
import Dummy from "./Dummy"
import axios from "axios";

class ApiCheck extends React.Component{
    constructor(){
        super()
        this.state ={
            items:"",
            isLoading:true
        }
    }
    
    componentDidMount() {
        axios
          .get("http://localhost:8080/login")
          .then(response => {
            this.setState({
                isLoading : true,
                items : response.data
            })
         }) .catch(error => console.log(error));
      }
    render(){

        console.log(this.state.items)
        return(
           
            <div>
               <h1>Backend is {this.state.items}</h1>
            </div>
        )
    }
}

export default ApiCheck