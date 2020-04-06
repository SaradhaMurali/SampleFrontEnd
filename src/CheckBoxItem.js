import React from "react"
import CheckBox from "./CheckBox"
import itemData from "./itemData"

class CheckBoxItem extends React.Component{
    constructor(){
        super()
        this.state = {
            todoItems : itemData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id){
        this.setState(prevData => {
            const prevItems = prevData.todoItems.map(item=>{
                if(item.id === id){
                    item.completed = !item.completed;
                }
                return item
            })
            return {
                todoItems : prevItems
            }
        })
    }
    render(){
        const items = this.state.todoItems.map(item => <CheckBox item={item} handle = {this.handleChange}/> )
        return (
            <div className="todo-list">
                {items}
            </div>
        )
    }
}
export default CheckBoxItem