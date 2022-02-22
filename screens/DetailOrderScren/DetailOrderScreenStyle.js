import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const Width = Dimensions.get('window').width - 30;
const WidthProduct = Dimensions.get('window').width - 50;
const Height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    item: {
        width: '99%',
        flexDirection: 'row',
        alignItems: 'center',  
        justifyContent: 'space-between',
    },
    wrapImage: {
        width: '30%',
        backgroundColor: COLORS.main2,
        borderRadius: 20,
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
        height: 100
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
    titleOrder: {
        marginVertical: 15,
        fontSize: 18,
        fontWeight: 'bold'
    },
    infoUser: {

    },
    groupInfo: {
        flexDirection: 'row',
        marginBottom: 10
    },
    infoName: {
        width: 100
    },
    infoContent: {
        
    }
})

export default styles;