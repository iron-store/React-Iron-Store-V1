import React, { Component } from 'react';

class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/product/')
            .then(res => { console.log(res); return res.json() })
            .then(
                products => {
                    let productsArray = products.map(product => {
                        return (
                            <div key={product._id} className="card col-xm-3 col-sm-5 col-md-4">
                                <img src={product.picturePath} alt={product.name}/>
                                <h3>{product.name}</h3>
                                <h4>{product.category}</h4>
                                <p>${product.price}</p>
                            </div>
                        )
                    })

                    this.setState({ products: productsArray })
                }
            )
    }

    render() {
        return (
            <div className="Products">
                {this.state.products}
            </div>
        );
    }
}

export default Products;
