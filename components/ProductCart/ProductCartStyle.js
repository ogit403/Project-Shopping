import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const styles = StyleSheet.create({
    item: {
        width: '100%',
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
        height: 130,
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
        marginLeft: 10
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
   
  
    specialPrice: {
        color: COLORS.red,
        fontWeight: 'bold',
        fontSize: 20,
    },
    specialPriceSale: {
        color: COLORS.gray,
        textDecorationLine: 'line-through'
    },
})

export default styles;