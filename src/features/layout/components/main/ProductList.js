import React from "react";
import watchImage from "../../../../assets/images/product-1.png";
import backPack from "../../../../assets/images/backpack.png";
import bear from "../../../../assets/images/bear.png";
import chess from "../../../../assets/images/chess.png";
import chocolate from "../../../../assets/images/chocolate.png";
import needle from "../../../../assets/images/needle.png";
import perfume from "../../../../assets/images/perfume.png";
import roses from "../../../../assets/images/roses.png";
import tree from "../../../../assets/images/tree.png";
import bracelet from "../../../../assets/images/bracelet.png";
import layout from "../../../../assets/sass/layout.module.scss";
import classes from "./main.module.scss";
import Categories from "../structures/Categories";
import Opportunities from "../structures/Opportunities";
import Product from "../ui/Product";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    productList = [
        {
            productImage: watchImage,
            productCaption: 'Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth',
            productDelivery: 'Ücretsiz Teslimat',
            productPrice: '399,90 TL',
        },
        {
            productImage: perfume,
            productCaption: 'Calvin Klein Euphoria EDP 100 ml Kadın Parfüm',
            productDelivery: '',
            productPrice: '145,61 TL',
        },
        {
            productImage: tree,
            productCaption: 'Gold Çizgili Vazoda 2 Dal Orkide Çiçeği',
            productDelivery: 'Ücretsiz Teslimat',
            productPrice: '249,90 TL',
        },
        {
            productImage: bracelet,
            productCaption: '925 Ayar Gümüş Çeyreklik Bileklik (Y)',
            productDelivery: '',
            productPrice: '329,90 TL',
        },
        {
            productImage: backPack,
            productCaption: 'Sailor SD-3160 Siyah Dağcı Seyahat Sırt Çantası 55 LT Outdoor-Trekking',
            productDelivery: 'Ücretsiz Teslimat',
            productPrice: '499,90 TL',
        },
        {
            productImage: chess,
            productCaption: 'Büyük Boy Metal Osmanlı Bizans Satranç Takımı Parlak ve Cev...',
            productDelivery: 'Ücretsiz Teslimat',
            productPrice: '19,90 TL',
        },
        {
            productImage: bear,
            productCaption: '130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)',
            productDelivery: 'Ücretsiz Teslimat',
            productPrice: '89,90 TL',
        },
        {
            productImage: needle,
            productCaption: '925 Ayar Gümüş Dualı İsimli Nazar İgnesi',
            productDelivery: 'Ücretsiz Teslimat',
            productPrice: '29,90 TL',
        },
        {
            productImage: chocolate,
            productCaption: 'Özel Tatlar Çikolata Kutusu 300 gr',
            productDelivery: 'Ücretsiz Teslimat',
            productPrice: '59,90 TL',
        },
        {
            productImage: roses,
            productCaption: 'Kucak Dolusu Aşk 25 Kırmızı Gül Buketi',
            productDelivery: '',
            productPrice: '199,90 TL',
        }
    ]

    render() {
        return (
            <section className={layout.pageContainer}>
                <Categories/>
                <h4>Tüm Kategoriler</h4>
                <div className={classes.productListWrapper}>
                    {this.productList.map((product) => (
                        <Product image={product.productImage} caption={product.productCaption}
                                 delivery={product.productDelivery} price={product.productPrice}/>
                    ))}
                </div>
            </section>
        )
    }
}

export default ProductList;