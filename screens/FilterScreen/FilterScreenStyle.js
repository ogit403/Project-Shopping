import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const Width = Dimensions.get('window').width - 30;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        // fontFamily: 'Poppins',
        marginTop: 20
    },
    titlePrice: {
        fontSize: 18,
        fontWeight: 'bold',
        // fontFamily: 'Poppins',
        marginTop: 30
    },
    wrapChip: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10
    },
    chip: {
        margin: 5
    },
    chipActive: {
        backgroundColor: COLORS.main2,
        color: COLORS.white
    },
    category: {
        // height: Height / 10,
        width: '100%',
        paddingTop: 10,
        flexDirection: 'row'
    },
    itemCategory: {
        width: Width / 4.2,
        // height: '100%',
        // height: Height / 10,
        marginHorizontal: 5,
        marginVertical: 5,
        alignItems: 'center'
    },
    wrapImage: {
        borderWidth: 1,
        borderColor: COLORS.main,
        borderRadius: 10,
        width: 70,
        height: 50,
        // paddingHorizontal: 5,
        // paddingVertical: 5
    },  
    imageCategory: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    titleCategory: {
        textAlign: 'center',
        color: COLORS.text,
        // fontFamily: 'Poppins',
        paddingTop: 4,
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
    activeCategory: {
        backgroundColor: COLORS.main2,
        // marginRight: 10,
        borderRadius: 10
    }
})

export default styles;