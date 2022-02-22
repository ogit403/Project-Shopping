import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    wrapContent: {
        alignItems: 'center'
    },
    wrapImage: {
        backgroundColor: COLORS.main2,
        width: '85%',
        height: 180,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconImage: {
        position: 'absolute',
        bottom: -5,
        right: -5   
    },
    change: {
        position: 'absolute',
        bottom: 10,
        left: 15,
        fontSize: 15
    },
    log: {
        position: 'absolute',
        bottom: 10,
        right: 30  
    },
    main: {
        marginTop: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    },
    groupInput: {
        marginBottom: 15
    },
    changePassword: {
        textAlign: 'right',
        marginTop: 5,
        color: COLORS.main
    },
    modal: {
        backgroundColor: COLORS.white,
        marginVertical: 30,
        padding: 20,
        // width: '90%',

    },
    titleModal: {
        color: COLORS.main,
        fontSize: 18,
        textAlign: 'center'
    },
    groupButtonChange: {
        alignItems: 'center'
    },
    buttunChange: {
        backgroundColor: COLORS.main,
        color: COLORS.white,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 15
    },
    mainModal: {
        marginVertical: 25
    },
    inputModal: {
        marginBottom: 16
    }
})

export default styles;