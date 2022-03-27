import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECEFF1',
        marginBottom: 10,
        marginTop: 10,
        padding: 10,
        flex: 1,
        borderRadius: 5,
        marginHorizontal:5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2,},
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    image_container: {
    },
    image: {
        height: Dimensions.get('window').height /3,
        borderRadius: 10,
    },
    text_container: {
        justifyContent: 'space-between',
        flex: 1,
    },
    title: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 10,
    },
    price: {
        fontSize: 14,
        textAlign: 'right',
    },
    in_stock: {
        color: '#FF0000',
        fontSize: 16,
        textAlign: 'right',
    },
});

export default styles;