import React, { Component } from 'react';
import CategoryItem from "./CategoryItem";

class CategoryList extends Component {
  // WE WILL CHANGE THIS ONE TO HANDLE THE CATEGORY CLICK
  // deleteTodo(id){
  //   this.props.onDelete(id)
  // }

  render() {
    let categoryItems;

    if(this.props.categoryList){
      let parentList = this.props.categoryList.filter(category => {
        return category.parent === null;
      })

      if(parentList){
        categoryItems = parentList.map(category => {
          let children = this.props.categoryList.filter(child => {
            return child.parent === category._id;
          })
          return (
            <CategoryItem 
            // WE WILL CHANGE THIS ONE INTO THE HANDLER COR THE CATEGORY CLICK
            // onDelete={this.deleteTodo.bind(this)} 
            key={category.name} 
            category={category} 
            children={children}
            />
          )
        });
      }
    }
    return (
      <div className="CategoryList">
        <h3>Category List</h3>
        {categoryItems}
      </div>
    );
  }
}


export default CategoryList;
