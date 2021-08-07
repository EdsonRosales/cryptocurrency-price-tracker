import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { SAMPLE_DATA } from '../assets/sampleData'
import ListItemComponent from '../components/ListItemComponent'

const ListHeader = () => {
    return(
        <>
            <View style={styles.titleWrapper}>
                <Text style={styles.largeTitle}>Markets</Text>
            </View>
            <View style={styles.divider} />
        </>
    )
}

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                keyExtractor={(item) => item.id}
                data={SAMPLE_DATA}
                renderItem={({ item }) => (
                    <ListItemComponent
                        coinName={item.name}
                        symbol={item.symbol}
                        currentPrice={item.current_price}
                        priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
                        logoUrl={item.image}
                    />      
                )}
                ListHeaderComponent={<ListHeader />}
            />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleWrapper: {
        marginTop: 20,
        paddingHorizontal: 16,
    },
    largeTitle: {
        fontSize: 24,
        fontFamily: 'bold',
    },
    divider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#A9ABB1',
        marginHorizontal: 16,
        marginTop: 16,
    }
})
