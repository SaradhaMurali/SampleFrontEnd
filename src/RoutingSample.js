import React from "react"
import {BrowserRouter as Router, Link,Redirect} from "react-router-dom"
import Route from "react-router-dom/Route"

class RoutingSample extends React.Component{
    handleClick(){
        return(
            <Redirect to="/login"/>
        )
    }
    render(){
        return(
            
            <Router>
                <Link to="/login">Login</Link>
                <br/>
            <Link to="/home">home</Link>
                <Route path="/" exact render={
                    ()=>{
                        return (
                            <div>
                                <h1>This is About</h1>
                                <button onClick={this.handleClick}>Home</button>
                            </div>
                        )
                    }
                }>
                </Route>
                <Route path="/home" exact render={
                    ()=>{
                        return (
                            <h1>This is Home</h1>
                        ) 
                    }
                }>
                </Route>
                <Route path="/check" exact render={
                    ()=>{
                        return (
                            <h1>This is Check</h1>
                        ) 
                    }
                }>
                </Route>
                <Route path="/login" exact render={
                    ()=>{
                        return (
                        <h1>This is Login</h1>
                        ) 
                    }
                }>
                </Route>
            </Router>
        )
    }
}

 export default RoutingSample