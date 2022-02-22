import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 15,

    },
    titleMain: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold'
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
})

export default styles;