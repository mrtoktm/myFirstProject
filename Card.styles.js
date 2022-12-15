import { StyleSheet, Dimensions} from "react-native";

export default StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#024547',
        margin: 4,
        borderRadius: 7,
        width: Dimensions.get('window').width / 2,
    },
    inner_container: {
        padding: 12,
        paddingBottom: 3,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderRadius: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#d38c08',
        paddingTop: 10,
        paddingBottom: 4,
    },
    price: {
        fontSize: 12,
        color: '#09f4d5',
    },
    inStock: {
        fontSize: 10,
        color: 'pink',
        paddingTop: 3,
    },
    search_input: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        margin: 10,
        borderWidth: 3,
        borderColor: '#d38c08',
    },
});
