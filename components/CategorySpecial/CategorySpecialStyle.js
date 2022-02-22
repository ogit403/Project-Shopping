import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../contains';
const Width = Dimensions.get('window').width - 30;
const styles = StyleSheet.create({
    category: {
        // height: Height / 10,
        width: '100%',
        marginTop: 15,
        flexDirection: 'row'
    },
   
    categoryTitle: {
        // fontFamily: 'Poppins',
        fontSize: 18,
        marginBottom: 10
    },
    categorySpecial: {
        width: '100%',
        marginTop: 10
    },
    wrapCategorySpecial: {
        width: '100%',
        flexDirection: 'row',
    },
    
})

export default styles;