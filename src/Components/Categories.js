import React, { Component } from 'react';
import Products from './Products';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.updateFilter = React.createRef();
        this.state = {
            categories: [],
            subCategories: [],
        }
    }

    filter(name) {
        if (name !== 'all')
            this.updateFilter.current.filterByCategory(name);
        else
            this.updateFilter.current.componentDidMount();
    }

    addChildren(category) {
        fetch(`http://localhost:3000/category/sub-categories/${category._id}`)
            .then(res => { return res.json() })
            .then(children => {
                category.subCategories = children;
                category.clicked = false;
            });
    }

    showSubCategories(category) {
        category.clicked = !category.clicked;
        let subCategories;
        if (category.clicked === true) {
            subCategories = category.subCategories.map(sub => {
                return (
                    <div key={sub._id}>
                        <button onClick={this.filter.bind(this, sub.name)}>{sub.name}</button>
                    </div>
                )
            })
        }
        else
            this.setState({ subCategories: [] });
        this.setState({ subCategories: subCategories });
    }

    filterByCategory(categoryId) {

    }

    componentDidMount() {
        fetch(`http://localhost:3000/category`)
            .then(res => { return res.json() })
            .then(
                categories => {
                    let categoriesArray = categories.map(category => {
                        this.addChildren(category);
                        return (
                            <div key={category._id}>
                                {!category.parent &&
                                    <div>
                                        < button type="button" onClick={this.showSubCategories.bind(this, category)}>
                                            {category.name}
                                            {/* {this.name} */}
                                        </button>
                                        {/* {this.state.subCategories} */}
                                    </div>
                                }
                            </div>
                        )
                    })

                    console.log("categories: ", categoriesArray)
                    this.setState({ categories: categoriesArray });
                    console.log("State categories: ", this.state.categories)
                })
    }

    render() {
        return (
            <div className="Categories row">
                <div className="col-md-3">
                    <button onClick={this.filter.bind(this, "all")}>All Categories</button>
                    <div>{this.state.categories}</div>
                    <h4>Subcategories: </h4>
                    {this.state.subCategories}
                </div>
                <div className="col-md-9">
                    <Products ref={this.updateFilter} />
                </div>
            </div>
        );
    }
}

export default Categories;
