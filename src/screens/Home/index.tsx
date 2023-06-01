import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export default function Home() {

  const [participants, setParticipants] = useState<string[]>(['Nicolas'])

  function handleParticipantAdd() {
    if(participants.includes('Nicolas')) { 
      return Alert.alert("Participante existe", "Já existe um participante com esse nome")
    }

    setParticipants(state => [...state, 'Ana'])
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!"),
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
    console.log(`Voce deletou o participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Maio de 2023</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder='Nome do participante'
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={participants}
        renderItem={({ item }) => (
          <Participant 
            name={item} 
            onRemove={() => handleParticipantRemove(item)} 
          />
        )}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Ninguém chegou no evento. Adicione participantes agora mesmo!</Text>
        )}
      />
        
    </View>
  );
}

