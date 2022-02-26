import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import ProductList from "./components/main/ProductList"

function Layout() {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Header/>
                <ProductList/>
                <Footer/>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default Layout;
