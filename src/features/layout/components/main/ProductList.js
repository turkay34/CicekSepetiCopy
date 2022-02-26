import React from "react";
import Categories from "../structures/Categories";
import Opportunities from "../structures/Opportunities";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Categories/>
                Product List
                <Opportunities/>
            </div>
        )
    }
}

export default ProductList;