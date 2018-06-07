import React, { Component } from 'react';
import $ from 'jquery';
import CategoryList from './CategoryList'

class CategoryBar extends Component {
  constructor(){
    super();
    this.state = {
      categories: [],
    }
  }

  getCategories(){
    $.ajax({
      url: `http://localhost:3000/category`,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({categories: data}, function(){
          console.log('this.state: ', this.state);
        });
      }.bind(this),
      error: function(err){
        console.log('err: ', err);
      }
    });
  }

  componentWillMount(){
    this.getCategories();
  }

  componentDidMount(){
    // this.getCategories();
  }

  // WE WILL TURN THIS ONE INTO HANDLE CLICK CATEGORY
  // handleDeleteProject(id){
  //   let projects = this.state.projects;
  //   let index = projects.findIndex(x => x.id === id);
  //   projects.splice(index, 1);
  //   this.setState({projects:projects})
  // }

  render() {
    return (
      <div className="CategoryBar">
        <CategoryList 
          // THIS PASSES THE STATE DOWN
          categoryList={this.state.categories}
          // WE WILL CHANGE THIS ONE TO HANDLE THE CLICK OF A CATEGORY 
          // onDelete={this.handleDeleteProject.bind(this)} 
        />
      </div>
    );
  }
}

export default CategoryBar;
