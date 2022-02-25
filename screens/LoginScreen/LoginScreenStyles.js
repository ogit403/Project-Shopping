import { StyleSheet } from 'react-native'
import { COLORS } from '../../contains';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: COLORS.login,
        paddingTop: 30
    },
    top: {
        paddingTop: 10,
        paddingLeft: 20,

    },  
    wrapImage: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        marginBottom: 30
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    main: {
        // flex: 1,
    },
    title: {
        fontFamily: 'Poppins',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: COLORS.input
    },
    wrapForgot: {
        width: '90%',
        alignItems: 'flex-end',

    },
    forgot: {
        color: COLORS.main,
        textAlign: 'right',
        marginTop: 5,
        fontWeight: 'bold'
    },  
    group: {
        alignItems: 'center'
    },
    groupInput: {
        width: '95%',
        marginTop: 20,
        position: 'relative'
    },
    titleInput: {
        marginBottom: 5
    },
    contentInput: {
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 5,
        color: COLORS.input
    },
    iconInput: {
        position: 'absolute',
        right: 20,
        top: 5,
        textAlign: 'center'
    },
    wrapInput: {
        width: '100%'
    },
    groupButton: {
        width: '100%',
       flexDirection: 'row',
       justifyContent: 'center',
        marginTop: 10
    },
    button: {
        backgroundColor: 'pink',
        color: '#ffffff',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 5,
        width: '100%',
    },
    groupText: {
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textRegister: {
        color: 'red',
        marginLeft: 5
    },
   
})

export default styles;