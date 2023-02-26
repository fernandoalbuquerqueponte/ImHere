import React, { useState } from "react"
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native"
import { Participant } from "../../components/Participant"
import { styles } from "./styles"

export function Home() {
const [participants, setParticipants] = useState<string[]>([])

const [participantName, setParticipantsName] = useState("")

  const handleParticipantAdd = () => {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante Existe",
        "Já existe um participante na lista com esse nome"
      )
    }
    setParticipants((prevState) => [...prevState, participantName])
    setParticipantsName("")
  }

  const handleParticipantRemove = (name: string) => {
    Alert.alert(
      "Remover",
      `Deseja realmente remover o participante ${name} ?`,
      [
        {
          text: "Sim",
          onPress: () => Alert.alert("Deletado!"),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor={"#6B6B6B"}
          onChangeText={setParticipantsName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda.
          </Text>
        )}
      />
    </View>
  )
}
