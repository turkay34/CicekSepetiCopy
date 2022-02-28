import React from "react";
import {Row} from "react-bootstrap";
import classes from "./stuctures.module.scss";

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <aside>
                <h3 className={classes.categoryHeader}>Kategoriler</h3>
                <div className={classes.categoryWrapper}>
                    <button className={classes.chosenCategoryButton}>Tüm Kategoriler</button>
                    <button className={classes.categoryButton}>Elektronik</button>
                    <button className={classes.categoryButton}>Ev ve Yaşam</button>
                    <button className={classes.categoryButton}>Evcil Hayvan</button>
                    <button className={classes.categoryButton}>Kitap</button>
                    <button className={classes.categoryButton}>Oyuncak</button>
                    <button className={classes.categoryButton}>Spor</button>
                    <button className={classes.categoryButton}>Çiçek</button>
                    <button className={classes.categoryButton}>Hediye</button>
                    <button className={classes.categoryButton}>Moda,Aksesuar</button>
                    <button className={classes.categoryButton}>Ofis,Kırtasiye</button>
                    <button className={classes.categoryButton}>Parfüm</button>
                    <button className={classes.categoryButton}>Kişisel Bakım</button>
                    <button className={classes.categoryButton}>Petshop</button>
                </div>
            </aside>
        )
    }
}

export default Categories;