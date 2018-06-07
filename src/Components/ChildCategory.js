import React, { Component } from 'react';

class ChildCategory extends Component {
  // WE WILL CHANGE THIS ONE INTO THE CLICK HANDLER  
  // deleteTodo(id){
  //   this.props.onDelete(id);
  // }

  render() {
    return (
      <li className="Category">
        <strong>{this.props.category.name}</strong>
        {/* <a href="#" onClick={this.deleteTodo.bind(this, this.props.todo.id)}> X</a> */}
      </li>
    );
  }
}

export default ChildCategory;