import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white', 
        paddingTop: 50,
        paddingBottom: 5
    },
    top: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color: COLORS.main,
        fontSize: 20,
        // fontFamily: 'Poppins',
        // fontWeight: 'bold'
    },
    bottom: {
        paddingHorizontal: 15,
        marginTop: 10
    },
    input: {
        elevation: 2, // remove shadow on Android
        shadowOpacity: 2, 
        // borderWidth: 1,
        // borderColor: COLORS.gray,
        borderRadius: 50,
        height: 40,
        fontSize: 10,
        width: '65%'
    }
})

export default styles;