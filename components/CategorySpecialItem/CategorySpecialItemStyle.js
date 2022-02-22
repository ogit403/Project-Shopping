import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../contains';
const Width = Dimensions.get('window').width - 30;
const styles = StyleSheet.create({
    itemCategorySpecial: {
        flexDirection: 'row',
        width: Width - 100,
    },
    specialWrapImage: {
        width: '35%',
        height: 120,
        marginRight: 10
    },
    specialWrapContent: {
        width: '65%',
    },
    specialImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 40
    },
    specialTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        // fontFamily: 'Poppins'
    },
    specialDetail: {
        // fontFamily: 'Poppins'
    },
    specialRate: {
        paddingVertical: 5,
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
    wrapPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        paddingRight: 25
    },
})

export default styles;