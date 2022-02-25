import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 15,

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
    confirm: {
        marginTop: 20
    },
    titleConfirm: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    address: {
        
    },
    modal: {
        backgroundColor: COLORS.white,
        padding: 20,
        width: '90%',
        borderRadius: 10,
        marginHorizontal: 20,
        alignItems: 'center'
    },
    itemAddress: {
        marginTop: 10,
        backgroundColor: COLORS.main2,
        paddingHorizontal: 5,
        borderRadius: 10,
        paddingVertical: 10
    },
    addressName: {
        fontSize: 16,
        fontWeight: 'bold',
       
    },
    addressContent: {

    },
    changeTitle: {
        textAlign: 'right',
        color: COLORS.main,
        marginTop: 5
    },
    groupButtonConfirm: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15
    },
    buttonConfirm: {
        backgroundColor: COLORS.main2,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
    },
    titleModal: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    wrapImageModal: {
        width: '100%',
        height: 100,
        marginBottom: 20
    },
    imageModal: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    successModal: {
        fontWeight: 'bold',
        fontSize: 16
    },
    idOrder: {
        marginLeft: 5,
        color: COLORS.red
    },
    orderModal: {
        flexDirection: 'row'
    },
    wrapButtonModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25
    },
    continueModal: {
        backgroundColor: COLORS.main,
        color: COLORS.white,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginHorizontal: 10
    },
    detailModal: {
        backgroundColor: COLORS.gray,
        color: COLORS.white,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginHorizontal: 10
    }
})

export default styles;