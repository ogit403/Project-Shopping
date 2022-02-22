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
    active: {
        backgroundColor: COLORS.main2,
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
    input: {
        height: 40,
        borderRadius: 50
    }
})

export default styles;