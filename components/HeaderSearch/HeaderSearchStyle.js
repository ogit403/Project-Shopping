import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white', 
        paddingTop: 50,
        paddingBottom: 5,
        alignItems: 'center'
    },
    input: {
        elevation: 2, // remove shadow on Android
        shadowOpacity: 2, 
        // borderWidth: 1,
        // borderColor: COLORS.gray,
        borderRadius: 50,
        height: 40,
        fontSize: 10,
        width: '80%'
    }
})

export default styles;