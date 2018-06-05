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
                            <div key={product._id}>
                                <h3>{product.name}</h3>
                                <img src={product.picturePath} />
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
