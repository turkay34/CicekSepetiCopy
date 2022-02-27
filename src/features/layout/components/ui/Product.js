import React from "react";
import classes from "./ui.module.scss";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <article className={classes.productWrapper}>
                <figure className={classes.productImageWrapper}>
                    <img src={this.props.image} alt=""/>
                </figure>
                <figcaption className={classes.productSummary}>
                    <span>{this.props.caption}</span>
                </figcaption>
                <div className={classes.productDetails}>
                    <span className={classes.productDelivery}>{this.props.delivery}</span>
                    <span className={classes.productPrice}>{this.props.price}</span>
                    <button className={classes.productButton}>Sepete Ekle</button>
                </div>
            </article>
        )
    }
}

export default Product;