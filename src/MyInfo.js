import React ,{Component}from "react"


class MyInfo extends Component{
  constructor(){
    super()
    this.state = {
      count  : 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(prev =>{
      return{
          count : prev.count + 1
    }
    })
  }
  
  render(){
     return (
     <div>
        <h1>{this.state.count}</h1>
        <br/>
        <button onClick= {this.handleClick}>Click Me</button>

     </div>
     )
  }
}
function apppp(){
  return (
    <p>Hai</p>
  )
}
export default MyInfo