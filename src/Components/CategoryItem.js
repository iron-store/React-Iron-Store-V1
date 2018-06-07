import React, { Component } from 'react';
import ChildCategory from "./ChildCategory";

class CategoryItem extends Component {
  constructor(){
    super();
    this.state = {
      clicked: false
    }
  }
  // WE WILL CHANGE THIS ONE INTO THE CLICK HANDLER  
  // deleteTodo(id){
  //   this.props.onDelete(id);
  // }

  clickParentCategory(){
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    console.log('this.props.children: ', this.props.children);
    let childrenCategories

    if(this.props.children && this.state.clicked === true){
      childrenCategories = this.props.children.map(category => {
        return (
          <ChildCategory 
          // WE WILL CHANGE THIS ONE INTO THE HANDLER COR THE CATEGORY CLICK
          // onDelete={this.deleteTodo.bind(this)} 
          key={category.name} 
          category={category} 
          />
        )
      });
    }

    
    return (
      <div className="no-space" >
        <li className="Category" onClick={this.clickParentCategory.bind(this)}>
          <strong>{this.props.category.name}</strong>
          {/* <a href="#" onClick={this.deleteTodo.bind(this, this.props.todo.id)}> X</a> */}
        </li>
        <ul>
          {childrenCategories}
        </ul>
      </div>
    );
  }
}

export default CategoryItem;