import React from "react";
import classes from "./main.module.scss";
import layout from "../../../../assets/sass/layout.module.scss";
import phoneImage from "../../../../assets/images/phone.png";
import appStore from "../../../../assets/images/appstore.png";
import playStore from "../../../../assets/images/playstore.png";
import qr from "../../../../assets/images/qr.png";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <section className={`${layout.pageContainerFluid} ${classes.footerContainer}`}>
                <div className={classes.mobilePromotionWrapper}>
                    <div className={classes.mobilePromotion}>
                        <div className={classes.promotionWrapper}>
                            <img src={phoneImage} alt=""/>
                        </div>
                        <div className={classes.promotionInfo}>
                            <div className={classes.mobileInfo}>
                                <img src={qr} alt=""/>
                                <div>
                                    <p>Çiçek Sepeti Mobil Uygulamayı İndirin</p>
                                    <span>Mobil Uygulamayı QR Kod ile İndirin.</span>
                                </div>
                            </div>
                            <div className={classes.promotionLinks}>
                                <img src={playStore} alt=""/>
                                <img src={appStore} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer;