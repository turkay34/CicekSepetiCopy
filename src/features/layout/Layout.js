import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/main/Header";
import Hero from "./components/main/Hero";
import Breadcrumb from "./components/main/Breadcrumb";
import Footer from "./components/main/Footer";
import ProductList from "./components/main/ProductList"
import Opportunities from "./components/structures/Opportunities";

function Layout() {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Header/>
                <Hero/>
                <Breadcrumb/>
                <ProductList/>
                <Opportunities/>
                <Footer/>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default Layout;
