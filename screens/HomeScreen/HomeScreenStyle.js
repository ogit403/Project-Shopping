import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const Width = Dimensions.get('window').width - 30;
const WidthProduct = Dimensions.get('window').width - 50;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    listProduct: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
        flexWrap: 'wrap'
        // backgroundColor: COLORS.gray
    },
    
})

export default styles;