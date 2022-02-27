import React from "react";
import classes from "./stuctures.module.scss";
import layout from "../../../../assets/sass/layout.module.scss";
import stationery from "../../../../assets/images/stationery.png";
import present from "../../../../assets/images/present.png";
import delivery from "../../../../assets/images/delivery.png";

class Opportunities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <hr className={classes.divider}/>
                <section className={`${layout.pageContainer} ${classes.opportunityContainer}`}>
                    <div className={classes.opportunityWrapper}>
                        <div className={classes.opportunityWrapperDelivery}>
                            <img src={delivery} alt="Free Delivery"/>
                            <div className={classes.opportunityInfo}>
                                <p className={classes.opportunityText}>75 TL Üzerine Teslimat Ücreti Bizden</p>
                                <button>Detaylı Bilgi</button>
                            </div>
                        </div>
                        <div className={classes.opportunityWrapperDiscountPresent}>
                            <img src={present} alt="Discounts On Present Category"/>
                            <div className={classes.opportunityInfo}>
                                <p className={classes.opportunityText}>Hediye Kategorisi için Sepette %15 İndirim</p>
                                <button>Hediye Ürünleri</button>
                            </div>
                        </div>
                        <div className={classes.opportunityWrapperDiscountStationery}>
                            <img src={stationery} alt="Discounts On Stationery Category"/>
                            <div className={classes.opportunityInfo}>
                                <p className={classes.opportunityText}>Kırtasiye Kategorisi için Sepette %15 İndirim</p>
                                <button>Detaylı Bilgi</button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Opportunities;