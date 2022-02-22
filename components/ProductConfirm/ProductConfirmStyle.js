import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const styles = StyleSheet.create({
    item: {
        width: '99%',
        flexDirection: 'row',
        alignItems: 'center',  
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: COLORS.gray,
        paddingVertical: 15
    },
    wrapImage: {
        width: '30%',
        // backgroundColor: COLORS.main2,
        // borderRadius: 20,
        marginRight: 10
    },
    wrapContent: {
        width: '70%'
    },
    wrapNumber: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    image: {
        width: '100%',
        height: 120,
        resizeMode: 'contain'
    },
    
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    wrapPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    wrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        color: COLORS.red,
        fontSize: 20
    },
    priceTotal: {
        color: COLORS.red,
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    
    button: {
        fontSize: 20,
    },
    number: {
        marginHorizontal: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    wrapButton: {
        width: 30,
        height: 30,
        backgroundColor: COLORS.main2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    buttonBottom: {
        marginBottom: 15
    },
    bottom: {
        backgroundColor: COLORS.red,
        paddingVertical: 10,
        textAlign: 'center',
        color: COLORS.white,
        fontSize: 18,
        borderRadius: 10
    },
    wrapCount: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    count: {
        flexDirection: 'row',
        marginRight: 10,
        alignItems: 'center'
    },
    countTotal: {
        color: COLORS.red,
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10
    },
   
  
    specialPrice: {
        color: COLORS.red,
        fontWeight: 'bold',
        fontSize: 16,
    },
    specialPriceSale: {
        color: COLORS.gray,
        textDecorationLine: 'line-through'
    },
})

export default styles;