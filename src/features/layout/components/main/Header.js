import React from "react";
import classes from "./main.module.scss";
import {Container, Row, Col} from "react-bootstrap";

import brandLogo from "../../../../assets/images/cicek-sepeti-logo.png"

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container>
                <nav className={classes.navWrapper}>
                    <Col lg={2}>
                        <img src={brandLogo} alt="CicekSepeti"/>
                    </Col>
                    <Col lg={7}>
                        <div className={classes.searchInput}>
                            <input type="text"/>
                            <button>Ara</button>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <button className={classes.cartButton}>Sepetim</button>
                    </Col>
                </nav>
            </Container>
        )
    }
}

export default Header;