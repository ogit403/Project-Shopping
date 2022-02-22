import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const Width = Dimensions.get('window').width - 30;
const WidthProduct = Dimensions.get('window').width - 50;
const Height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'white',
        // paddingHorizontal: 15,
        // paddingVertical: 10
    },
    background1: {
        position: 'absolute',
        top: 0,
        height: '100%',
        width: '100%',
        // zIndex: 1,
        backgroundColor: COLORS.white
    },
    background2: {
        position: 'absolute',
        top: 150,
        height: '100%',
        width: '100%',
        // zIndex: 2,
        backgroundColor: COLORS.main2,
        borderTopLeftRadius: 100
    },
    detail: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        zIndex: 3,
        width: '100%',
        // flexDirection: 'row'
    },
    wrapItem: {
        flexDirection: 'row'
    },
    wrapImage: {
        width: '30%',
        marginRight: 30
    },  
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain'
    },
    wrapContent: {
        width: '70%'
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    rate: {
        // marginVertical: 15
        marginTop: 10
    },
    priceSale: {
        textDecorationLine: 'line-through',
        marginBottom: 10,
        marginTop: 10
    },
    wrapPriceMain: {
        flexDirection: 'row',
        marginRight: -15,
        justifyContent: 'flex-end',
        // alignItems: 'flex-end'
    },
    priceMain: {
        backgroundColor: 'red',
        color: COLORS.white,
        paddingVertical: 15,
        fontSize: 20,
        fontWeight: 'bold',
        width: '80%',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        paddingLeft: 20
    },
    wrapDesc: {

    },
    titleDesc: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10
    },
    desc: {

    },
    wrapButton: {

    },
    titleButton: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10
    },
    wrapButton: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    number: {
        fontWeight: 'bold',
        fontSize: 23
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
    },
    wrapComment: {
        width: '100%'
    },
    itemComment: {  
        flexDirection: 'row',
        borderTopColor: COLORS.gray,
        borderTopWidth: 1,
        paddingVertical: 10
    },
    wrapImageComment: {
        width: '25%'
    },
    imageComment: {
        width: '100%',
        height: 60,
        // borderRadius: 
    },
    wrapContentComment: {
        width: '75%'
    },
    nameComment: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    mainComment: {
        marginTop: 5
    },
    wrapImageContent: {
        flexDirection: 'row'
    },
    imageContent: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },
    buttonBottom: {
        flexDirection: 'row',
        backgroundColor: COLORS.gray,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    bottomTotal: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomCount: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold'
    },  
    bottom: {
        color: COLORS.white,
    },
    confirm: {
        backgroundColor: COLORS.main2,
        color: COLORS.red,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default styles;