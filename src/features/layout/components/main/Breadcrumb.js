import React from "react";
import classes from "./main.module.scss";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {Container} from "react-bootstrap";

class Breadcrumb extends React.Component {
    render() {
        return (
            <Container>
                <nav className={classes.breadCrumb}>
                    <ol>
                        <li>
                            <a href="/" className={classes.breadCrumbItem}>Ciceksepeti Market</a>
                        </li>
                        <li className={classes.breadCrumbSeparator}>
                            >
                        </li>
                        <li>
                            <a href="/" className={classes.breadCrumbItem}>Istanbul</a>
                        </li>
                        <li className={classes.breadCrumbSeparator}>
                            >
                        </li>
                        <li>
                            <a href="/" className={classes.breadCrumbLastItem}>CicekSepetiBreadCrumb</a>
                        </li>
                    </ol>
                </nav>
            </Container>
        )
    }
}

export default Breadcrumb;