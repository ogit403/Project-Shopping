import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const Width = Dimensions.get('window').width - 30;
const WidthProduct = Dimensions.get('window').width - 50;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    listProduct: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
        flexWrap: 'wrap'
        // backgroundColor: COLORS.gray
    },
    itemProduct: {
        width: WidthProduct / 2,
        // backgroundColor: 'white',
        marginHorizontal: 5,
        elevation: 5,
        marginBottom: 10,
        padding: 5
    },
    wrapProductImage: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    wrapProductContent: {
        padding: 5
    },
    productImage: {
        width: '100%',
        height: 120,
        borderRadius: 15
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    productPrice: {
        color: COLORS.red,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    productSale: {
        position: 'absolute',
        top: 5,
        right: 5,
        zIndex: 1,
        width: 40,
        height: 30,
        backgroundColor: COLORS.yellow,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    productFavorite: {
        position: 'absolute',
        top: -5,
        left: -5,
        zIndex: 1,
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    productSaleTitle: {
        color: COLORS.white,
    },
    wrapPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15
    }
})

export default styles;