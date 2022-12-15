import React from "react";
import { TextInput, View } from "react-native";
import styles from './Card.styles';

const SearchBox = () => {
    return (
        <View>
            <TextInput
                style={styles.search_input}
                placeholder="Search" />
        </View>
    );
};

export default SearchBox;