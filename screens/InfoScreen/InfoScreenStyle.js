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
        // backgroundColor: COLORS.main2,
        width: '100%',
        height: 180,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconImage: {
        position: 'absolute',
        bottom: 5,
        right: 5   
    },
    change: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        fontSize: 16,
        fontWeight: '700',
        backgroundColor: COLORS.main2,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
        color: COLORS.input
    },
    contentInput: {
        borderColor: COLORS.main,
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 6,
        backgroundColor: 'transparent',
        borderRadius: 5,
        color: COLORS.input,
        fontSize: 16,
        fontWeight: 'bold'
    },
    titleInput: {
        marginBottom: 3,

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
        marginBottom: 15,
        // paddingVertical: 
    },
    changePassword: {
        textAlign: 'right',
        marginTop: 5,
        color: COLORS.main
    },
    modal: {
        backgroundColor: COLORS.white,
        padding: 20,
        width: '90%',
        borderRadius: 10,
        marginHorizontal: 20,
        alignItems: 'center'
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
        marginVertical: 25,
        width: '100%'
    },
    inputModal: {
        marginBottom: 16
    }
})

export default styles;