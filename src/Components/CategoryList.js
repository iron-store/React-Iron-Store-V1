import React, { Component } from 'react';
import ParentCategory from "./ParentCategory";

class CategoryList extends Component {

  passTheCategoryName(categoryName){
    this.props.passCatNameToList(categoryName);
  }

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
            <ParentCategory 
              key={category.name} 
              category={category} 
              children={children}
              onPassCategoryName={this.passTheCategoryName.bind(this)}
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
