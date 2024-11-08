import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {        
        padding: 18,      
        alignItems: 'center', 
        width: '100%', 
        height: '100%', 
        backgroundColor: '#004bc4', 
        borderRadius: 20, 
     
    },  
    titulo: {
        fontSize: 30, 
        fontWeight: 'bold', 
        color:'white',
    
    }, 
    imagem: {
        width: '60%', 
        resizeMode: 'center', // stretch
    },
});

export default styles;

