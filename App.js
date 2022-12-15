import React from "react";
import { SafeAreaView, Text, View, FlatList, StyleSheet} from "react-native";
import Card from './components/Card';
import new_shopping from './newshopping.json';
import SearchBox from "./components/Card/SearchBox";

function App () {
    const renderItem = ({item}) => <Card shopping = {item} />;
    
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>PATIKASTORE</Text>
                
            <FlatList
            ListHeaderComponent={() => <SearchBox />}
            horizontal={false}
            numColumns={2}
            data={new_shopping}
            renderItem={renderItem}
            />

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#068caa',
    },
    title: {
        fontSize: 24,
        color: 'deep pink',
        fontWeight: 'bold',
        marginLeft: 8,
    },
});

export default App;