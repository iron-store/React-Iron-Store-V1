import React, { Component } from 'react';
import ChildCategory from "./ChildCategory";

class CategoryItem extends Component {
  constructor(){
    super();
    this.state = {
      clicked: false
    }
  }

  clickParentCategory(){
    this.setState({clicked: !this.state.clicked})
  }

  passCategoryName(categoryName){
    this.props.onPassCategoryName(categoryName);
  }

  render() {
    let childrenCategories

    if(this.props.children && this.state.clicked === true){
      childrenCategories = this.props.children.map(category => {
        return (
          <ChildCategory 
            key={category.name} 
            category={category} 
            onClickChildCategory={this.passCategoryName.bind(this)}
          />
        )
      });
    }

    
    return (
      <div className="no-space" >
        <li className="Category" onClick={this.clickParentCategory.bind(this)}>
          <strong>{this.props.category.name}</strong>
        </li>
          {childrenCategories}
      </div>
    );
  }
}

export default CategoryItem;