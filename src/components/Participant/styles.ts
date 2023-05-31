import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: "#1f1e25",
        flexDirection: 'row',
        alignItems:'center',
        borderRadius: 5,
        marginBottom: 10,
    }, 
    name: {
        flex: 1,
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#e23c44",
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonText: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: 'bold'
      },
})