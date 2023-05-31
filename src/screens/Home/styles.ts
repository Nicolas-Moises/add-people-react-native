import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      padding: 24,
    },
    eventName: {
      color: "#FFF",
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate: {
      color: "#6B6B6B",
      fontSize: 16,
    },
    input: {
        backgroundColor: "#1F1E25",
        height: 56,
        borderRadius: 5,
        flex: 1,
        color: "#FFF",
        padding: 16,
        fontSize: 16,
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: "#31cf67",
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      color: "#FFF",
      fontSize: 24,
      fontWeight: 'bold'
    },
    form: {
      flexDirection: 'row',
      gap: 12,
      marginTop: 36,
      marginBottom: 42,
    }
  });