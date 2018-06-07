import React, { Component } from 'react';
// import Categories from './Components/Categories'

class NavBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
                <div class="row elements">
                    <div class="col-md-4 ">
                        <a class="col-md-4"> Home </a>
                        <a class="col-md-4"> History </a>
                        <a class="col-md-4">Admin</a>
                    </div>
                    <div class="col-md-4 ">
                        <img src="https://res.cloudinary.com/ddibftjux/image/upload/v1527824178/iron_store.png" alt="Ironstore Logo" class="site-logo" />
                    </div>
                    <div class="col-md-4 ">
                        <a class="col-md-2">Hello</a>
                        <a class="col-md-2"> Signup </a>
                        <a class="col-md-2"> Login </a>
                        <a class="col-md-2">Logout</a>
                        <a class="col-md-2"> 0 <i class="fas fa-shopping-cart"></i></a>
                    </div>
                </div>
        );
    }
}

export default NavBar;
