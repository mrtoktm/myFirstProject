import React from "react";
import {Text, View, Image} from "react-native";
import styles from './Card.styles';

const Card = ({shopping}) => {
    return (
        <View style={styles.container}>
           <View style={styles.inner_container}>
           <Image style={styles.image} source={{uri: shopping.imgURL}}></Image>
           <Text style={styles.text}>{shopping.title}</Text>
           <Text style={styles.price}>{shopping.price}</Text>
           <Text style={styles.inStock}>
            {shopping.inStock === true ? '' : 'STOKTA YOK'}</Text>
           </View>  
        </View>
    );
};

export default Card;