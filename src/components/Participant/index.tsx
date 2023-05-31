import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type ParticipantType = {
    name: string
}

export function Participant(props: ParticipantType) {

    function handleParticipantRemove() {}

    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {props.name}
            </Text>

            <TouchableOpacity style={styles.button} onPress={handleParticipantRemove}>
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
        </View>
    )
}