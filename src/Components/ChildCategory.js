import React, { Component } from 'react';

class ChildCategory extends Component {

  clickedChildCategory(categoryName){
    this.props.onClickChildCategory(categoryName);
  }

  render() {
    return (
      <li className="Category child-category" onClick={this.clickedChildCategory.bind(this, this.props.category.name)}>
        <strong>{this.props.category.name}</strong>
      </li>
    );
  }
}

export default ChildCategory;