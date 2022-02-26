import React from "react";
import classes from "./main.module.scss";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {Container} from "react-bootstrap";

class Breadcrumb extends React.Component {
    render() {
        return (
            <Container>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" className={classes.breadcrumbLink} href="/">
                        Ciceksepeti Market
                    </Link>
                    <Link underline="hover" className={classes.breadcrumbLink} href="/"
                    >
                        İstanbul
                    </Link>
                    <p className={classes.breadcrumbLastItem}>Ciceksepeti Breadcrumb</p>
                </Breadcrumbs>
            </Container>
        )
    }
}

export default Breadcrumb;