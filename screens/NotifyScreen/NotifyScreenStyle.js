import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    title: {
        color: COLORS.main,
        fontSize: 16,
        textAlign: 'right'
    },
    itemAddress: {
        marginTop: 10,
        backgroundColor: COLORS.gray,
        paddingHorizontal: 5,
        borderRadius: 10,
        paddingVertical: 10
    },
    addressName: {
        fontSize: 16,
        fontWeight: 'bold',
       marginBottom: 10
    },
    active: {
        backgroundColor: COLORS.main2,
    },
})

export default styles;