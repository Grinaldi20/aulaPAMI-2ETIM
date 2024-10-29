import { StyleSheet } from 'react-native'; 
import {RFValue} from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
     container: {
      alignItems:'center',
      flex: 1,
      backgroundColor: '#00e381',
      padding: 8 ,
     },

     titulo:{
          fontSize: RFValue(20),
          color:'#fff',
          fontWeight:'bold',
          marginTop:16,
     },

     texto:{
          marginTop:20,
          color:'#fff',
          fontSize:17 ,
     
     },
});

export default styles;