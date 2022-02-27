import React from "react";
import classes from "./main.module.scss";
import layout from "../../../../assets/sass/layout.module.scss";

class Hero extends React.Component {
    render() {
        return (
            <div className={`${layout.pageContainerFluid} ${classes.headerBanner}`} fluid>
                <div className={`${layout.pageContainer} ${classes.bannerTextWrapper}`}>
                    <h1>ÇiçekSepeti</h1>
                </div>
            </div>
        )
    }
}

export default Hero;