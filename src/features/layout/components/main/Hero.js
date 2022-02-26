import React from "react";
import classes from "./main.module.scss";
import {Container} from "react-bootstrap";

class Hero extends React.Component {
    render() {
        return (
            <Container className={classes.headerBanner} fluid>
                <Container className={classes.bannerTextWrapper}>
                    <h1>ÇiçekSepeti</h1>
                </Container>
            </Container>
        )
    }
}

export default Hero;