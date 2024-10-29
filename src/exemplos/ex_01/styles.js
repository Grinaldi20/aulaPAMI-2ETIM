import { StyleSheet } from 'react-native'; 
import {RFValue} from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
     container: {
      alignItems:'center',
      flex: 1,
      backgroundColor: 'cyan',
      padding: 8 ,
     },

     titulo:{
          fontSize: RFValue(20),
          color:'#fff',
          fontWeight:'bold',
          marginTop:16,
     },
});

export default styles;