import React from "react";
import classes from "./main.module.scss";
import layout from "../../../../assets/sass/layout.module.scss";
import phoneImage from "../../../../assets/images/phone.png";
import appStore from "../../../../assets/images/appstore.png";
import playStore from "../../../../assets/images/playstore.png";
import qr from "../../../../assets/images/qr.png";
import icon from "../../../../assets/images/icon.png";
import iconFacebook from "../../../../assets/images/icon-fb.png";
import iconInstagram from "../../../../assets/images/icon-ig.png";
import iconTwitter from "../../../../assets/images/icon-tw.png";
import iconYoutube from "../../../../assets/images/icon-yt.png";
import logo from "../../../../assets/images/cicek-sepeti-logo.png";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <section className={`${layout.pageContainerFluid} ${classes.footerContainer}`}>
                <div className={layout.pageContainer}>
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
                    <div className={classes.footerDetails}>
                        <div className={classes.footerLeftSide}>
                            <div className={classes.footerImageWrapper}>
                                <img src={logo} alt=""/>
                            </div>
                            <div className={classes.footerSocialWrapper}>
                                <img src={iconFacebook} alt=""/>
                                <img src={iconTwitter} alt=""/>
                                <img src={iconInstagram} alt=""/>
                                <img src={iconYoutube} alt=""/>
                                <img src={icon} alt=""/>
                            </div>
                            <div className={classes.footerText}>
                                CicekSepeti.com olarak kişisel verilerinizin gizliliğini önemsiyoruz. 6698 sayılı
                                Kişisel
                                Verilerin Korunması Kanunu kapsamında oluşturduğumuz aydınlatma metnine buradan
                                ulaşabilirsiniz.
                            </div>
                        </div>
                        <div className={classes.footerRightSide}>
                            <div className={classes.footerHeaders}>
                                <h5>Faydalı Bilgiler</h5>
                                <a href="/">Çiçek Bakımı</a>
                                <a href="/">Çiçek Eşliğinde Notlar</a>
                                <a href="/">Çiçek Anlamları</a>
                                <a href="/">Özel Günler</a>
                                <a href="/">Mevsimlere Göre Çiçekler</a>
                                <a href="/">BonnyFood Saklama Koşulları</a>
                                <a href="/">Site Haritası</a>
                            </div>
                            <div className={classes.footerHeaders}>
                                <h5>Kurumsal</h5>
                                <a href="/">Hakkımızda</a>
                                <a href="/">Kariyer</a>
                                <a href="/">ÇiçekSepeti'nde Satış Yap</a>
                                <a href="/">Kurumsal Müşterilerimiz</a>
                                <a href="/">Reklamlarımız</a>
                                <a href="/">Basında Biz</a>
                                <a href="/">Kampanyalar</a>
                                <a href="/">Vizyonumuz</a>
                            </div>
                            <div className={classes.footerHeaders}>
                                <h5>İletişim</h5>
                                <a href="/">Bize Ulaşın</a>
                                <a href="/">Sıkça Sorulan Sorular</a>
                            </div>
                            <div className={classes.footerHeaders}>
                                <h5>Gizlilik Sözleşmesi</h5>
                                <a href="/">Mesafeli Satış Sözleşmesi</a>
                                <a href="/">Bilgi Toplumu Hizmetleri</a>
                                <a href="/">Gizlilik Sözleşmesi</a>
                                <a href="/">Ödeme Seçenekleri</a>
                                <a href="/">Hesap Bilgileri</a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.footerDescription}>
                        Türkiyenin en büyük online çiçek sitesi ÇiçekSepeti ile sevdiklerinizi mutlu etmek çok kolay! Çiçek göndermenin ve “Mutlu etmenin adresi” Çiçek Sepeti ile sevdiklerinize özel günlerde online çiçek gönderebilirsiniz. Geniş çiçekçi ağı sayesinde çiçek siparişleriniz Türkiye’nin dört bir yanına hızlı ve sorunsuz şekilde gönderilir. Taze çiçeklerle hazırlanan mis kokulu şık çiçek aranjmanları arasından beğendiğiniz ürünü seçerek, hızlı bir şekilde online sipariş verebilirsiniz. Sevdiklerinizin doğum günü, yıldönümü gibi mutlu günlerinde onların sevincine ortak olmak için yapmanız gereken sadece birkaç tıkla sipariş vermek. Sevgililer Günü, Kadınlar Günü, Anneler Günü gibi özel günlerde de çiçek, hediye ve lezzetli bonnyFood ürünleriyle sevdiklerinizi mutlu edebilirsiniz. Çünkü mutlu etmenin adresi; ÇiçekSepeti.
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer;