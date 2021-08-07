import React, { useRef, useMemo } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { SAMPLE_DATA } from '../assets/sampleData'
import {
    BottomSheetModal,
    BottomSheetModalProvider,
  } from '@gorhom/bottom-sheet'
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

    // ref
    const bottomSheetModalRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ['50%'], []);

    //FUNCTIONS
    const openModal = () => {
        bottomSheetModalRef.current.present();
    }

    return (
        <BottomSheetModalProvider>
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
                            onPress={() => openModal()}
                        />      
                    )}
                    ListHeaderComponent={<ListHeader />}
                />
            </SafeAreaView>

            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0} //<---Correspond to the index to start in the snapPoints
                snapPoints={snapPoints}
                style={styles.bottomSheet}
            >
                <View style={styles.contentContainer}>
                    <Text>Awesome 🎉</Text>
                </View>
            </BottomSheetModal>

        </BottomSheetModalProvider>
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
    },
    bottomSheet: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
})
