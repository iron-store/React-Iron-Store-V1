import React, { Component } from 'react';
import $ from 'jquery';
import CategoryList from './CategoryList'
import Products from './Products';

class Home extends Component {
  constructor(props){
    super(props);
    this.updateFilter = React.createRef();
    this.state = {
      categories: [],
    }
  }

  setCategoryFilter(name) {
    if (name !== 'all'){
      this.updateFilter.current.filterByCategory(name);
    }
    else {
      this.updateFilter.current.componentDidMount();
    }
  }

  getCategories(){
    $.ajax({
      url: `http://localhost:3000/category`,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({categories: data}, function(){
          // console.log('this.state: ', this.state);
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

  // componentDidMount(){
  //   this.getCategories();
  // }

  render() {
    return (
      <div className="CategoryBar row">
        <div className="col-md-3">
          <li onClick={this.setCategoryFilter.bind(this, "all")}>All Categories</li>
          <CategoryList 
            // THIS PASSES THE STATE DOWN
            categoryList={this.state.categories}
            passCatNameToList={this.setCategoryFilter.bind(this)}
          />
        </div>
        <div className="col-md-9">
          <Products ref={this.updateFilter} />
        </div>
      </div>
    );
  }
}

export default Home;
