import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({ 
    texto: {
        fontSize: RFValue(20),  
        color:'white',
      
        fontWeight:'bold',
    }, 

    idade:{
        fontSize: RFValue(20), 
        color:'white',
    },
        
container:{
    marginBottom: RFValue(25),
    boderBottomWidht: RFValue(2),
    width:'100%',
    alignItems:'center',
    borderColor: '#ffffff',
},
    

});

export default styles;

