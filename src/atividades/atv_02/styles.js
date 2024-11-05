import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {        
        padding: 18,      
        alignItems: 'center', 
        width: '100%', 
        height: '100%', 
        backgroundColor: '#000000', 
        borderRadius: 20, 
     
    },  
    titulo: {
        fontSize: 30, 
        fontWeight: 'bold', 
        color:'white',
        fontFamily:'Arial Rounded MT Bold',
    }, 
    imagem: {
        width: '60%', 
        resizeMode: 'center', // stretch
    },
});

export default styles;

