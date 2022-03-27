import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './PrdocutCard.style';

const ProductCard = ({product}) => {
    const {title, imgURL, price, inStock, id} = product;

    return (
        <View style={styles.container}>
            <View style={styles.image_container}>
                <Image style={styles.image} source={{uri: imgURL}}  key={id} />
            </View>
            <View style={styles.text_container}>
                <Text style={styles.title} >{title}</Text>
                <Text style={styles.price} >{price}</Text>
                { !inStock && <Text style={styles.in_stock} >STOKTA YOK</Text>  }
            </View>
        </View>
    );
};

export default ProductCard;