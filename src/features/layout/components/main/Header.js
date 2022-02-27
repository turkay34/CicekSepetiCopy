import React from "react";
import classes from "./main.module.scss";
import layout from "../../../../assets/sass/layout.module.scss";
import {Col} from "react-bootstrap";

import brandLogo from "../../../../assets/images/cicek-sepeti-logo.png"

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <header className={layout.pageContainer}>
                <nav className={classes.navWrapper}>
                    <Col className={classes.navLogo} lg={3} md={3} sm={6}>
                        <img src={brandLogo} alt="CicekSepeti"/>
                    </Col>
                    <Col className={classes.navInput} lg={7} md={7} sm={12}>
                        <div className={classes.searchInput}>
                            <input type="text"/>
                            <button>Ara</button>
                        </div>
                    </Col>
                    <Col className={classes.navCart} lg={2} md={2} sm={6}>
                        <button className={classes.cartButton}>Sepetim</button>
                    </Col>
                </nav>
            </header>
        )
    }
}

export default Header;