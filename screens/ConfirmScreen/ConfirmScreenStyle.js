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
    }
})

export default styles;