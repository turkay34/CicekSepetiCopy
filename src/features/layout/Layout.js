import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/main/Header";
import Hero from "./components/main/Hero";
import Breadcrumb from "./components/main/Breadcrumb";
import Footer from "./components/main/Footer";
import ProductList from "./components/main/ProductList"

function Layout() {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Header/>
                <Hero/>
                <Breadcrumb/>
                <ProductList/>
                <Footer/>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default Layout;
