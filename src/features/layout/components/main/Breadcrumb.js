import React from "react";
import classes from "./main.module.scss";
import layout from "../../../../assets/sass/layout.module.scss";
import {Container} from "react-bootstrap";

class Breadcrumb extends React.Component {
    render() {
        return (
            <div className={layout.pageContainer}>
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
            </div>
        )
    }
}

export default Breadcrumb;